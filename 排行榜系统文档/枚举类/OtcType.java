package org.grocery.rank.enums;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import org.apache.commons.lang3.StringUtils;

import java.util.Objects;

/**
 * 处方药
 */
@Getter
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public enum OtcType {

    RX(1, "RX", "处方药"),
    OTC(2, "OTC", "非处方药");

    private Integer code;

    private String englishName;

    private String name;

    public static boolean containCode(Integer code) {
        if (Objects.isNull(code)) {
            return false;
        }
        for (OtcType value : OtcType.values()) {
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
        for (OtcType value : OtcType.values()) {
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
        for (OtcType value : OtcType.values()) {
            if (value.getName().equals(name)) {
                return value.getCode();
            }
        }
        return null;
    }
}
