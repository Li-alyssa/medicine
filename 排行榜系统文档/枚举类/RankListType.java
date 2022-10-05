package org.grocery.rank.enums;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.Objects;

@Getter
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public enum RankListType {

    TOTAL(1, "总排行榜"),
    FUNCTION_CARDIOVASCULAR_INJECT(21, "功能榜-心脑血管疾病用药（注射类）"),
    FUNCTION_CARDIOVASCULAR_ORAL(22, "功能榜-心脑血管疾病用药（口服药）"),
    FUNCTION_METABOLISM(23, "功能榜-代谢类疾病用药"),
    FUNCTION_RESPIRATORY(24, "功能榜-呼吸系统疾病用药"),
    FUNCTION_MUSCULOSKELETAL(25, "功能榜-骨骼肌肉系统用药"),
    FUNCTION_URINARY(26, "功能榜-泌尿系统用药"),
    FUNCTION_DIGESTIVE(27, "功能榜-消化系统用药"),
    FUNCTION_TUMOUR(28, "功能榜-肿瘤用药"),
    FUNCTION_NERVOUS(29, "功能榜-神经系统用药"),
    FUNCTION_GYNECOLOGY(210, "功能榜-妇科用药"),
    FUNCTION_ANAL_SKIN(211, "功能榜-肛肠皮肤用药"),
    FUNCTION_ENT(212, "功能榜-五官科用药"),
    FUNCTION_PEDIATRIC(213, "功能榜-儿科用药"),
    FUNCTION_TONIC(214, "功能榜-补益类"),
    PROVINCE_BEIJING(31, "省份榜-北京"),
    PROVINCE_TIANJIN(32, "省份榜-天津"),
    PROVINCE_HEBEI(33,	"省份榜-河北"),
    PROVINCE_LIAONING(34,	"省份榜-辽宁"),
    PROVINCE_JILIN(35,	"省份榜-吉林"),
    PROVINCE_HEILONGJIANG(36,	"省份榜-黑龙江"),
    PROVINCE_SHANDONG(37,	"省份榜-山东"),
    PROVINCE_JIANGSU(38,	"省份榜-江苏"),
    PROVINCE_SHANGHAI(39,	"省份榜-上海"),
    PROVINCE_ZHEJIANG(310, "省份榜-浙江"),
    PROVINCE_ANHUI(311, "省份榜-安徽"),
    PROVINCE_FUJIAN(312, "省份榜-福建"),
    PROVINCE_JIANGXI(313, "省份榜-江西"),
    PROVINCE_GUANGDONG(314, "省份榜-广东"),
    PROVINCE_GUANGXI(315, "省份榜-广西"),
    PROVINCE_HAINAN(316, "省份榜-海南"),
    PROVINCE_HENAN(317, "省份榜-河南"),
    PROVINCE_HUNAN(318, "省份榜-湖南"),
    PROVINCE_HUBEI(319, "省份榜-湖北"),
    PROVINCE_SHANXI(320, "省份榜-山西"),
    PROVINCE_NEIMENGGU(321, "省份榜-内蒙古"),
    PROVINCE_NINGXIA(322, "省份榜-宁夏"),
    PROVINCE_QINGHAI(323, "省份榜-青海"),
    PROVINCE_SHAANXI(324, "省份榜-陕西"),
    PROVINCE_GANSU(325, "省份榜-甘肃"),
    PROVINCE_XINJIANG(326, "省份榜-新疆"),
    PROVINCE_SICHUAN(327, "省份榜-四川"),
    PROVINCE_GUIZHOU(328, "省份榜-贵州"),
    PROVINCE_YUNNAN(329, "省份榜-云南"),
    PROVINCE_CHONGQING(330, "省份榜-重庆"),
    PROVINCE_XIZANG(331, "省份榜-西藏"),
    PAPER(4, "论文排行榜"),
    PATENT(5, "专利排行榜"),
    NATIONAL(6, "民族药排行榜"),
    INJECTED(7, "注射类排行榜"),
    NON_INJECTED(8, "非注射类排行榜")
    ;

    private Integer code;

    private String name;

    public static boolean containCode(Integer code) {
        if (Objects.isNull(code)) {
            return false;
        }
        for (RankListType value : RankListType.values()) {
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
        for (RankListType value : RankListType.values()) {
            if (value.getCode().equals(code)) {
                return value.getName();
            }
        }
        return null;
    }

    public static void main(String[] args) {
        System.out.println(containCode(1));
    }
}
