---
tag:
  - unity
cover: /2022-05-10-18-59-58.png
tinyCover: /cover/2022-05-10-18-59-58.png
coverWidth: 564
coverHeight: 1172

---

# unity常用方法备忘

## unity中三种调用其他脚本函数的方法

第一种，被调用脚本函数为static类型，调用时直接用  脚本名.函数名()

第二种，GameObject.Find("脚本所在的物体的名字").SendMessage("函数名"); //能调用public和private类型函数

第三种，GameObject.Find("脚本所在的物体的名字").GetComponent<脚本名>().函数名(); //只能调用public类型函数

## CS  Where过滤

```cs
using System.Linq;
//...
List<GameObject> enabledDogs = Dogs.Where(e => !e.activeInHierarchy).ToList();
```

## Unity 实现简单的ws链接

```cs
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Net.WebSockets;
using System.Threading;
using UnityEngine;

public class GameLogic : MonoBehaviour
{
    // Start is called before the first frame
    //
    private ClientWebSocket ws;
    // 玩家池 收集最新进入的100个玩家
    public List<DanmuData> lastDanmuList = new List<DanmuData>();
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        
    }
    private void OnDestroy()
    {
        ws.Dispose();
    }
    public async void WebSocket()
    {
        try
        {
            ws = new ClientWebSocket();
            CancellationToken ct = new CancellationToken();
            Uri url = new Uri("ws://localhost:3000");
            await ws.ConnectAsync(url, ct);
            while (true)
            {
                var result = new byte[1024];
                await ws.ReceiveAsync(new ArraySegment<byte>(result), new CancellationToken());//接受数据
                var str = System.Text.Encoding.UTF8.GetString(result); // Encoding.UTF32.GetString(result, 0, result.Length - 3);
                Debug.Log("=======" + str.ToString());
                DanmuData danmu = returnAsJson(str);
                var has = lastDanmuList.Where((it) => it.uid == danmu.uid).ToList<DanmuData>();
                if (lastDanmuList.Count < 100&&has.Count<0)
                {
                 lastDanmuList.Add(danmu);
                }
                else
                {
                 lastDanmuList.Add(danmu);
                }
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine(ex.Message);
        }
    }
    public DanmuData returnAsJson(string jsonString)
    {
        return JsonUtility.FromJson<DanmuData>(jsonString);
    }
}
[SerializeField]
public class DanmuData
{
    public string uname;
    // 弹幕信息
    public string message;
    public string face;
    public int uid;
    public int type;
    public int rankNo;
    public string fans;
    public string medal;
}
```

## 根据单个属性 排序 可以用 unity自带的API

```cs
listBackPackData.Sort(sort);//第一个参数减去第二个参数 是升序 反之则是降序
private int sort(Game.item info, Game.item infogo)
{undefined
return (int)info.ConfigId - (int)infogo.ConfigId;
}
```

## 根据 多个属性 进行排序

```cs
ItemData.HeroList = accountLoginRes.HeroList.OrderBy(t => t.Rank).ThenBy(t => t.Hp).ToList();//升序

ItemData.HeroList = accountLoginRes.HeroList.OrderByDescending(t => t.Rank).ThenByDescending(t => t.Hp).ToList();//降序

```
