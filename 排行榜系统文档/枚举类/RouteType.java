package org.grocery.rank.enums;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import org.apache.commons.lang3.StringUtils;

import java.util.Objects;

/**
 * 给药途径
 */
@Getter
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public enum RouteType {

    INJECT(1, "注射"),
    ORAL(2, "口服"),
    EYEDROP(3, "滴眼液"),
    EXTERNAL(4, "外用")
    ;

    private Integer code;

    private String name;

    public static boolean containCode(Integer code) {
        if (Objects.isNull(code)) {
            return false;
        }
        for (RouteType value : RouteType.values()) {
            if (value.getCode().equals(code)) {
                return true;
            }
        }
        return false;
    }

    public static String getNameByCode(Integer code) {
        if (Objects.isNull(code)) {
            return null;
        }
        for (RouteType value : RouteType.values()) {
            if (value.getCode().equals(code)) {
                return value.getName();
            }
        }
        return null;
    }

    public static Integer findCode(String name) {
        if (StringUtils.isBlank(name)) {
            return null;
        }
        for (RouteType value : RouteType.values()) {
            if (value.getName().equals(name)) {
                return value.getCode();
            }
        }
        return null;
    }
}
