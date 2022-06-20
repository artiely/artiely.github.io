---
title: Unity
tag:
  - CS
  - unity
author: Artiely
date: 2021-12-29T00:00:00.000Z
cover: /2022-05-11-09-23-19.png
base64: 777777
tinyCover: /cover/2022-05-11-09-23-19.png
coverWidth: 564
coverHeight: 704
coverPrimary: b7a79c
coverSecondary: '485863'

---


# Unity插件分享

实现在线蹦迪部分插件分享

## aura-2-volumetric-lighting-fog

> 体积灯和雾效果实现
商城地址
<https://assetstore.unity.com/packages/tools/particles-effects/aura-2-volumetric-lighting-fog-137148>

白嫖地址

链接: <https://pan.baidu.com/s/1KwYwA_8bQnRK2pTaehe_-w>  
密码: f571
--来自百度网盘超级会员V1的分享
链接失效请联系我

## LitJSON

> JSON序列化
> 记得把插件放在`Assets/Plugins`下

链接: <https://pan.baidu.com/s/1kb2d_nKJx2_bZZu4wpy2xw>  
密码: sutk
--来自百度网盘超级会员V1的分享

## LayersToPNG.jsx

> Photoshop 转 spine
链接: <https://pan.baidu.com/s/19q1qXBnAsLV3hgax56AYsg>  
密码: 6g4c
--来自百度网盘超级会员V1的分享

## 资产分享

>场景

链接: <https://pan.baidu.com/s/1bAK3GpI8o47ZnsoyuhcFdg>  
密码: 3mfm
--来自百度网盘超级会员V1的分享

## 解决的问题

## 游戏资产何如管理 Unity如何通过github管理

## UI 文字 自发光

## 计算文字宽度

## 修改UI宽度

## spine操作

## 获取对象 移动对象

## 对象如何不受光照影响

## 如何制作动画

## 运行时修改材质

## CS LIST对象集合去重

新建一个类，实现IEqualityComparer接口。注意GetHashCode方法的实现，只有HashCode相同才会去比较

```cs 
public class Compare:IEqualityComparer<Data>
    {
        public bool Equals(Data x,Data y)
        {
            return x.nickname == y.nickname;//可以自定义去重规则，
        }
        public int GetHashCode(Data obj)
        {
            return obj.nickname.GetHashCode();
        }
    }
```

```cs 
List<Data> list=list.Distinct(new Compare()).ToList<Data>();
```

## [动画插件](http://dotween.demigiant.com/examples.php)

## 如何打包

## 音乐节拍

RhythmTool 链接：<https://pan.baidu.com/s/1v_bxMboCuAty0u_JLoEc6g> 提取码：7tas

3D Visualizer Spectrum Vu Meter
链接：<https://pan.baidu.com/s/14dAvKN-6u44sZOn3f2ahAg>
提取码：p92x
