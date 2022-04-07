package com.ojt.did.service;

import com.ojt.did.domain.DidDto;
import com.ojt.did.mapper.DidMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class DidService {
    @Autowired
    private DidMapper didMapper;

    public ResponseEntity<?> insertOrder(long id) {
        try {
            didMapper.insertOrder(id);
            return new ResponseEntity<>("입력 성공", HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    public ResponseEntity<?> getAll() {
        try {
            List<DidDto> didList = didMapper.findAll();
            return new ResponseEntity<>(didList, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    public ResponseEntity<?> getOrder(String state, int limit) {
        try {
            List<DidDto> didList = didMapper.findFirstLimitByState(state, limit);
            return new ResponseEntity<>(didList, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    public ResponseEntity<?> updateOrder(String type, long id) {
        Map<String, Object> resMap = new HashMap<>();
        try {
            DidDto didDto = didMapper.findById(id);
            resMap.put("beforeState", didDto.getState());
            switch (type) {
                case "F":
                    if (didDto.getState().equals("order")) {
                        didMapper.updateOrder("produce", id);
                        resMap.put("afterState", "produce");
                    }
                    break;
                case "L":
                    if (didDto.getState().equals("produce")) {
                        didMapper.updateOrder("ready", id);
                        resMap.put("afterState", "ready");
                    } else if (didDto.getState().equals("ready")) {
                        didMapper.deleteOrder(id);
                        resMap.put("afterState", "delete");
                    }
                    break;
            }
            return new ResponseEntity<>(resMap, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    public ResponseEntity<?> deleteOrder(long id) {
        try {
            DidDto didDto = didMapper.findById(id);
            didMapper.deleteOrder(id);

            Map<String, Object> resMap = new HashMap<>();
            resMap.put("description", "삭제 성공");
            resMap.put("data", didDto);
            return new ResponseEntity<>(resMap, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
