package com.ojt.did.controller;

import com.ojt.did.domain.DidDto;
import com.ojt.did.service.DidService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/api")
public class DidController {
    @Autowired
    private DidService didService;

    @PostMapping("/insertOrder/{id}")
    public ResponseEntity<?> insertOrder(@PathVariable("id") long id) {
        return didService.insertOrder(id);
    }

    @GetMapping("/getAll")
    public ResponseEntity<?> getAll() {
        return didService.getAll();
    }

    @GetMapping("/getOrder")
    public ResponseEntity<?> getOrder(@RequestParam("state") String state, @RequestParam("limit") int limit) {
        return didService.getOrder(state, limit);
    }

    @PutMapping("/updateOrder")
    public ResponseEntity<?> updateOrder(@RequestBody DidDto didDto) {
        return didService.updateOrder(didDto);
    }

    @DeleteMapping("/deleteOrder/{id}")
    public ResponseEntity<?> deleteOrder(@PathVariable("id") long id) {
        return didService.deleteOrder(id);
    }
}
