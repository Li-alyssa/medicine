package org.grocery.rank.enums;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public enum PictureType {

    NEWS(1, "产品获奖或新闻报道", "news"),
    INSURANCE(2, "医保准入", "insurance"),
    SALE(3, "海外销售", "sale"),
    PRICE(4, "药品价格", "price")
    ;

    private Integer code;

    private String name;

    private String bucket;

    public static PictureType getByCode(Integer code) {
        for (PictureType value : PictureType.values()) {
            if (value.getCode().equals(code)) {
                return value;
            }
        }
        return null;
    }
}
