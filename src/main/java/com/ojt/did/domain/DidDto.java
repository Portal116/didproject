package com.ojt.did.domain;

import lombok.*;

import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class DidDto {
    private long id;
    private String state;
    private Date createdDate;
    private Date modifiedDate;
}
