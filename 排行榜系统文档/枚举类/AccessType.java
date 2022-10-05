package org.grocery.rank.enums;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import org.apache.commons.lang3.StringUtils;

import java.util.Collections;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Getter
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public enum AccessType {

    INSURANCE(1, "国保"),
    BASE(2, "基药"),
    NEGOTIATION(3, "国谈"),
    CENTRAL(4, "集采")
    ;

    private Integer code;

    private String name;

    public static boolean containCode(Integer code) {
        if (Objects.isNull(code)) {
            return false;
        }
        for (AccessType value : AccessType.values()) {
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
        for (AccessType value : AccessType.values()) {
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
        for (AccessType value : AccessType.values()) {
            if (value.getName().equals(name)) {
                return value.getCode();
            }
        }
        return null;
    }

    public static List<Integer> findCodeList(List<String> names) {
        if (Objects.isNull(names) || names.size() == 0) {
            return null;
        }

        return names.stream()
                .map(AccessType::findCode)
                .filter(Objects::nonNull)
                .collect(Collectors.toList());
    }
}
