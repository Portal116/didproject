package com.ojt.did.mapper;

import com.ojt.did.domain.DidDto;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
public interface DidMapper {

    @Insert("insert into did_table(id) values(null)")
//    @Insert("insert into did_table(id) values(#{id})")
    public int insertOrder(@Param("id") long id);

    @Select("select * from did_table where state = #{state} order by modifiedDate asc limit #{limit}")
    public List<DidDto> findFirstLimitByState(@Param("state") String state, @Param("limit") int limit);

    @Select("select * from did_table")
    public List<DidDto> findAll();

    @Select("select * from did_table where id = #{id}")
    public DidDto findById(@Param("id") long id);

    @Update("update did_table set state = #{state} where id = #{id}")
    public int updateOrder(@Param("state") String state, @Param("id") long id);

    @Delete("delete from did_table where id = #{id}")
    public int deleteOrder(@Param("id") long id);
}
