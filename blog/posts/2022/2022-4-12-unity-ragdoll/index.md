---
tag:
  - unity
  - ragdoll
cover: /2022-05-10-18-41-39.png
tinyCover: /cover/2022-05-10-18-41-39.png
coverWidth: 466
coverHeight: 700

---

# unity ragdoll实现拾取道具的核心代码

- 给手的骨骼添加碰撞组件

```cs
void OnCollisionEnter(Collision col)
{
  if (col.gameObject.tag == "weapon")
  {
      // 有一些逻辑需要判断
      // 当前武器是否有玩家拥有 （如果一个武器只能被一个玩家拾取）
      //  武器当前的玩家不是他自己的时候才可以捡起
      if( !hasJoint)
      {
        hasJoint = true;
        leftHand.AddComponent<FixedJoint>();
        leftHand.GetComponent<FixedJoint>().breakForce = Mathf.Infinity;
        
        leftHand.GetComponent<FixedJoint>().connectedBody = col.gameObject.GetComponent<Rigidbody>();
      }
      
  }
}
```

丢掉武器的逻辑

- 力量清零

```cs
rightHand.GetComponent<FixedJoint>().breakForce = 0;
hasJoint = false;
```

- 销毁组件

```cs

  Destroy(rightHand.GetComponent<FixedJoint>());
```
