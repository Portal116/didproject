package com.ojt.did.Utils;

import org.apache.ibatis.jdbc.SQL;

public class DidUtils {
//    select * from did_table where state = #{state} order by modifiedDate asc limit #{limit}
//    (select * from did_table where state = 'ready' order by modifiedDate desc limit 1) " +
//            "union (select * from did_table where state = 'ready' order by modifiedDate asc limit #{limit-1})
    public String findFirstLimitByState(String state, int limit){
        SQL sqlRecent = new SQL(){
            {
                SELECT("*");
                FROM("did_table");
                WHERE("state = " + state);
                ORDER_BY("modifiedDate desc");
                LIMIT(1);
            }
        };
        SQL sqlMain = new SQL(){
            {
                SELECT("*");
                FROM("did_table");
                WHERE("state = " + state);
                ORDER_BY("modifiedDate asc");
                LIMIT(limit-1);
            }
        };
        return sqlRecent.toString() + " UNION " + sqlMain.toString();
    }
}
