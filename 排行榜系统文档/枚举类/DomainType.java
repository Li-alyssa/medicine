package org.grocery.rank.enums;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import org.apache.commons.lang3.StringUtils;

import java.util.Objects;

@Getter
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public enum DomainType {

    CARDIOVASCULAR_INJECT(1, "心脑血管疾病用药（注射类）"),
    CARDIOVASCULAR_ORAL(2, "心脑血管疾病用药（口服药）"),
    METABOLISM(3, "代谢类疾病用药"),
    RESPIRATORY(4, "呼吸系统疾病用药"),
    MUSCULOSKELETAL(5, "骨骼肌肉系统用药"),
    URINARY(6, "泌尿系统用药"),
    DIGESTIVE(7, "消化系统用药"),
    TUMOUR(8, "肿瘤用药"),
    NERVOUS(9, "神经系统用药"),
    GYNECOLOGY(10, "妇科用药"),
    ANAL_SKIN(11, "肛肠皮肤用药"),
    ENT(12, "五官科用药"),
    PEDIATRIC(13, "儿科用药"),
    TONIC(14, "补益类"),
    ;

    private Integer code;

    private String name;

    public static boolean containCode(Integer code) {
        if (Objects.isNull(code)) {
            return false;
        }
        for (DomainType value : DomainType.values()) {
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
        for (DomainType value : DomainType.values()) {
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
        for (DomainType value : DomainType.values()) {
            if (value.getName().equals(name)) {
                return value.getCode();
            }
        }
        return null;
    }
}
