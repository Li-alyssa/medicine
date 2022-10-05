package org.grocery.rank.enums;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;
import org.apache.commons.lang3.StringUtils;

@Getter
@ToString
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public enum Province {

    QUANGUO(0,"全国"),
    BEIJING(1, "北京"),
    TIANJIN(2, "天津"),
    HEBEI(3,	"河北"),
    LIAONING(4,	"辽宁"),
    JILIN(5,	"吉林"),
    HEILONGJIANG(6,	"黑龙江"),
    SHANDONG(7,	"山东"),
    JIANGSU(8,	"江苏"),
    SHANGHAI(9,	"上海"),
    ZHEJIANG(10, "浙江"),
    ANHUI(11, "安徽"),
    FUJIAN(12, "福建"),
    JIANGXI(13, "江西"),
    GUANGDONG(14, "广东"),
    GUANGXI(15, "广西"),
    HAINAN(16, "海南"),
    HENAN(17, "河南"),
    HUNAN(18, "湖南"),
    HUBEI(19, "湖北"),
    SHANXI(20, "山西"),
    NEIMENGGU(21, "内蒙古"),
    NINGXIA(22, "宁夏"),
    QINGHAI(23, "青海"),
    SHAANXI(24, "陕西"),
    GANSU(25, "甘肃"),
    XINJIANG(26, "新疆"),
    SICHUAN(27, "四川"),
    GUIZHOU(28, "贵州"),
    YUNNAN(29, "云南"),
    CHONGQING(30, "重庆"),
    XIZANG(31, "西藏"),
    XIANGGANG(32, "香港"),
    AOMEN(33, "澳门"),
    TAIWAN(34, "台湾");

    private Integer id;

    private String name;

    public static boolean containName(String name) {
        if (StringUtils.isBlank(name)) {
            return false;
        }
        for (Province value : Province.values()) {
            if (value.getName().equals(name)) {
                return true;
            }
        }
        return false;
    }

    public static String getNameById(Integer id) {
        for (Province value : Province.values()) {
            if (value.getId().equals(id)) {
                return value.getName();
            }
        }
        return null;
    }
    public static Integer findId(String name){
        for (Province value : Province.values()){
            if (value.name.equals(name)){
                return value.id;
            }
        }
        return 0;
    }
    public static boolean containId(Integer id) {
        for (Province value : Province.values()) {
            if (value.id.equals(id)) {
                return true;
            }
        }
        return false;
    }
}
