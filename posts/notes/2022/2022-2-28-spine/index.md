---
tag:
  - unity
  - CS
  - spine
cover: /2022-05-10-18-59-18.png
tinyCover: /cover/2022-05-10-18-59-18.png
coverWidth: 564
coverHeight: 1253

---

# Unity获取spine动画的一些信息

不同的unity版本可能有区别
以下为Unity2020 spine4.0

## 获取spine组件

```cs 
//skeletonData
SkeletonAnimation skeletonAnimation = GetComponent<SkeletonAnimation>();
```

## 获取所有的动画

```cs 
// 获取所有的动画
List<Spine.Animation> sk = skeletonAnimation.skeleton.Data.Animations.ToList<Spine.Animation>();
// 随机展示一个动画
skeletonAnimation.state.AddAnimation(0, sk[Random.Range(0, sk.Count - 1)].Name, true, Random.Range(0f, 3f));
```

## 播放动画

```cs 
skeletonAnimation.state.SetAnimation(0, hitAnimation, false);
skeletonAnimation.state.AddAnimation(0, currentAnimation, true, 0);
// 注：（起始帧，动画名，是否loop,延迟）
```

## 改变动画

```cs 
skeletonAnimation.AnimationName="xx"
```

## 动画翻转

```cs 
if(x > 0)
skeletonAnimation.skeleton.FlipX = false;
else if(x < 0)
skeletonAnimation.skeleton.FlipX = true;
```

## 变色

```cs 
skeletonAnimation.skeleton.R = 0.5f;//对skin的整体偏色 有rgba四个参数

//默认
skeletonAnimation.skeleton.R = 1;
skeletonAnimation.skeleton.G = 1;
skeletonAnimation.skeleton.B = 1;
```

## 更多

```cs 

Debug.Log(skeletonAnimation.name);//获取角色名
Debug.Log(skeletonAnimation.skeleton.bones[5].ToString()); //获取所有骨骼数组list<spine.Bone>
Debug.Log(skeletonAnimation.skeleton.slots[5].ToString());//获取所有插槽数组
Debug.Log(skeletonAnimation.skeleton.data.animations[0].name.ToString());//获取所有动画数组
skeletonAnimation.skeleton.FindBone("root").flipX = true;//根据骨骼名获取骨骼
Debug.Log(skeletonAnimation.skeleton.FindBoneIndex("root").ToString());//根据骨骼名获取骨骼的index
Debug.Log(skeletonAnimation.skeleton.FindSlot("torso").attachment.Name);//根据slot名获取slot
Debug.Log(skeletonAnimation.skeleton.FindSlotIndex("torso").ToString());//根据slot名获取slot index
Debug.Log(skeletonAnimation.skeleton.data.FindAnimation("walk").name);//根据动画名获取动画

//skin
Debug.Log(skeletonAnimation.skeleton.data.skins[0].name.ToString());//获取所有 skin
Spine.Attachment _attachment = skeletonAnimation.skeleton.data.skins[0].GetAttachment(5,"left lower leg");//从skin通过slot的index attachment的名获取attachment

//BoneData
Spine.Bone _bone = skeletonAnimation.skeleton.FindBone("left upper leg");
Debug.Log(_bone.parent.ToString());//获取骨骼的父骨骼
Debug.Log(_bone.data.length.ToString());//获取骨骼长度
Debug.Log(_bone.rotation.ToString());//获取骨骼旋转
Debug.Log(_bone.data.scaleX.ToString());//获取骨骼放缩
Debug.Log(_bone.data.scaleY.ToString());
Debug.Log(_bone.data.inheritRotation.ToString());// 是否旋转值相对父骨骼 true是相对父骨骼
Debug.Log(_bone.data.inheritScale.ToString());//是否放缩值相对父骨骼 true是相对父骨骼

//SlotData
Spine.Slot _slot = skeletonAnimation.skeleton.FindSlot("torso");
Debug.Log(_slot.data.name);//获取slot的名字
Debug.Log(_slot.data.boneData.name);//获取slot挂靠的bone
Debug.Log(_slot.r.ToString());//获取slot的颜色R值
Debug.Log(_slot.data.attachmentName);//获取pose下slot的attachment名
_slot.data.additiveBlending = true;//获取或设置slot时候用additive blending来渲染 注释：用于特效？

//Animation
Debug.Log(skeletonAnimation.skeleton.data.animations[0].duration.ToString());//动画持续时间？
List<Spine.Timeline> _timeline = skeletonAnimation.skeleton.data.animations[0].timelines;//获取动画timeline

//Skeleton
Spine.SkeletonData _data = skeletonAnimation.skeleton.data;//获取SkeletonData
Debug.Log(_data.bones[0].ToString()); //获取所有骨骼
Debug.Log(_data.slots[0].ToString());//获取所有slots
Debug.Log(skeletonAnimation.skeleton.drawOrder[0].attachment.Name);//获取所有DrawOder
Debug.Log(skeletonAnimation.skeleton.skin.name);//获取当前skin名
skeletonAnimation.skeleton.r = 0.5f;//对skin的整体偏色 有rgba四个参数
Debug.Log(skeletonAnimation.skeleton.time.ToString());//?
skeletonAnimation.skeleton.flipX = true;//skeleton翻转轴向
skeletonAnimation.skeleton.flipY = true;
skeletonAnimation.skeleton.x = 0;//skeleton的坐标
skeletonAnimation.skeleton.y = 0;
skeletonAnimation.skeleton.SetBonesToSetupPose();
skeletonAnimation.skeleton.SetSlotsToSetupPose();
skeletonAnimation.skeleton.SetToSetupPose();

//skeletonAnimation.skeleton.GetAttachment();//获取GetAttachment
//skeletonAnimation.skeleton.SetAttachment();
skeletonAnimation.skeleton.Update(0.5f);//??
}

//--换装函数，但是必须在slot里有这个attachMent名

skeletonAnimation = GetComponent<SkeletonAnimation>();
skeletonAnimation.skeleton.SetAttachment("rear_upper_arm","muzzle");
skeletonAnimation.skeleton.GetAttachment();

//角色之间的绘制排序

renderer.sortingOrder = -5;

```
