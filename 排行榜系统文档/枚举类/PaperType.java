package org.grocery.rank.enums;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import org.apache.commons.lang3.StringUtils;

@Getter
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public enum PaperType {

    CHINESE(1, "中文期刊"),
    SCI(2, "SCI期刊");

    private Integer code;

    private String name;

    public static Integer findCode(String name) {
        if (StringUtils.isBlank(name)) {
            return null;
        }
        for (PaperType value : PaperType.values()) {
            if (value.getName().equals(name)) {
                return value.getCode();
            }
        }
        return null;
    }

    public static String findName(Integer code) {
        if (null == code) {
            return null;
        }
        for (PaperType value : PaperType.values()) {
            if (value.getCode().equals(code)) {
                return value.getName();
            }
        }
        return null;
    }
}
