import{i as o,o as a,c as t,j as e,k as n}from"./app.1a850f28.js";var s="/assets/image-20220120114154514-2650121-8609942.697dac38.png";const r=n('<h1 id="itween-%E5%85%A5%E9%97%A8" tabindex="-1"><span class="prefix"></span><span class="content">iTween \u5165\u95E8</span><span class="suffix"></span></h1><p><a href="http://www.pixelplacement.com/itween/index.php" target="_blank" rel="noopener">\u5B98\u7F51</a></p><h2 id="1.%E7%AE%80%E4%BB%8B" tabindex="-1"><span class="prefix"></span><span class="content">1.\u7B80\u4ECB</span><span class="suffix"></span></h2><p>iTween\u662F\u4E00\u4E2A\u52A8\u753B\u5E93,\u4F5C\u8005\u521B\u5EFA\u5B83\u7684\u76EE\u7684\u5C31\u662F\u6700\u5C0F\u7684\u6295\u5165\u5B9E\u73B0\u6700\u5927\u7684\u4EA7\u51FA\u3002\u8BA9\u4F60\u505A\u5F00\u53D1\u66F4\u8F7B\u677E,\u7528\u5B83\u53EF\u4EE5\u8F7B\u677E\u5B9E\u73B0\u5404\u79CD\u52A8\u753B,\u6643\u52A8,\u65CB\u8F6C,\u79FB\u52A8,\u892A\u8272,\u4E0A\u8272,\u63A7\u5236\u97F3\u9891\u7B49\u7B49\u3002</p><p>iTween\u7684\u6838\u5FC3\u662F\u6570\u503C\u7684\u63D2\u503C\u3002\u53EA\u9700\u8981\u5B9A\u4E49\u5F00\u59CB\u548C\u7ED3\u675F,\u4E2D\u95F4\u8FC7\u7A0BiTween\u5C31\u4F1A\u5E2E\u4F60\u5F04\u597D\u3002</p><p>iTween\u63D2\u4EF6\u5305\u542B\u4E24\u90E8\u5206:iTween\u548CiTweenPath</p><p>\u5982\u4F55\u5C06iTween \u52A0\u5165\u9879\u76EE\uFF1A</p><p>1.\u5728\u9879\u76EE\u4E2D\u5EFA\u7ACBPlugins\u76EE\u5F55\uFF0C \u5C06iTween.cs\u6587\u4EF6\u653E\u5230Plugins\u76EE\u5F55\u5373\u53EF\u3002</p><p>2.\u5982\u679C\u9700\u8981\u7F16\u8F91\u8DEF\u5F84\uFF0C\u4F7F\u7528import package-&gt;custom package\u83DC\u5355\u529F\u80FD\u52A0\u5165iTweenPath.unitypackage</p><p>1. iTween\u7C7B\u7684\u516C\u5171\u64CD\u4F5C\u63A5\u53E3\u5747\u4EE5\u9759\u6001\u65B9\u6CD5\u7684\u5F62\u5F0F\u63D0\u4F9B\u3002\u53EF\u5206\u4E3A\u4E09\u5927\u7C7B\uFF1A</p><blockquote><p>1.\u9759\u6001\u6CE8\u518C\u65B9\u6CD5\uFF1A\u63D0\u4F9B\u6CE8\u518C\u52A8\u753B\u6548\u679C\u7684\u9759\u6001\u65B9\u6CD5\u63A5\u53E3\u3002\u5982\uFF1AMoveTo\u3001CameraFadeTo\u7B49\u3002</p><p>2.Update\u9759\u6001\u65B9\u6CD5\uFF1A\u63D0\u4F9B\u6BCF\u5E27\u6539\u53D8\u5C5E\u6027\u503C\u7684\u73AF\u5883\uFF0C\u5728Update\u6216\u5FAA\u73AF\u73AF\u5883\u4E2D\u8C03\u7528\u3002\u5982\uFF1AMoveUpdate\u3001AudioUpdate\u7B49\u3002</p><p>3.\u5916\u90E8\u5DE5\u5177\u65B9\u6CD5\uFF1A\u5305\u62EC\u52A8\u753B\u63A7\u5236\u3001\u8DEF\u5F84\u7ED8\u5236\u7B49\u3002</p></blockquote><p>2. iTween\u7C7B\u5185\u90E8\u5B9A\u4E49\u4E86\u4E09\u79CD\u679A\u4E3E\u7C7B\u578B\uFF0C\u5206\u522B\u4E3A\uFF1A</p><blockquote><p>1.EaseType\uFF1A\u7F13\u52A8\u7C7B\u578B\u679A\u4E3E</p><p>2.LoopType\uFF1A\u52A8\u753B\u7684\u5FAA\u73AF\u7C7B\u578B\u679A\u4E3E</p><p>3.NamedValueColor\uFF1A\u5DF2\u547D\u540D\u989C\u8272\u679A\u4E3E</p></blockquote><p>3. iTween\u7C7B\u5305\u542B12\u79CD\u9759\u6001\u6CE8\u518C\u65B9\u6CD5\uFF0C\u5176\u4E2D\uFF1A</p><blockquote><p>8\u79CD\u52A8\u753B\u65B9\u6CD5\uFF1AFade\u3001Look\u3001Move\u3001Rotate\u3001Scale\u3001Punch\u3001Shake\u3001CameraFade</p><p>2\u79CD\u97F3\u9891\u65B9\u6CD5\uFF1AAudio\u3001Stab</p><p>1\u79CD\u989C\u8272\u53D8\u5316\u65B9\u6CD5\uFF1AColor</p><p>1\u79CD\u503C\u53D8\u5316\u65B9\u6CD5\uFF1AValueTo</p></blockquote><p><strong>\u6BCF\u79CD\u52A8\u753B\u53C8\u6709\u4E00\u79CD\u6216\u591A\u79CD\u6267\u884C\u65B9\u5F0F\uFF1ATo\u3001From\u3001Add\u3001By\u3002</strong></p><p>\u6BCF\u4E2A\u65B9\u6CD5\u4E00\u822C\u6709\u4E24\u79CD\u91CD\u8F7D\u65B9\u5F0F\uFF1A\u6700\u5C0F\u5B9A\u5236\u9009\u9879\u3001\u5B8C\u5168\u5B9A\u5236\u9009\u9879\u3002</p><p>Update\u7C7B\u65B9\u6CD5\uFF1A\u63D0\u4F9B\u6BCF\u5E27\u6539\u53D8\u5C5E\u6027\u503C\u7684\u73AF\u5883\u3002\u5728Update\u6216 FixedUpdate\u65B9\u6CD5\u6216\u7C7B\u4F3C\u4E8E\u5FAA\u73AF\u7684\u73AF\u5883\u4E2D\u8C03\u7528\u3002</p><h2 id="2.%E7%89%A9%E4%BD%93%E7%A7%BB%E5%8A%A8%E6%96%B9%E6%B3%95" tabindex="-1"><span class="prefix"></span><span class="content">2.\u7269\u4F53\u79FB\u52A8\u65B9\u6CD5</span><span class="suffix"></span></h2><p>\u5171\u6709\u4E94\u79CD\u7269\u4F53\u79FB\u52A8\u65B9\u6CD5\uFF1A</p><blockquote><p>1.MoveTo:\u4ECE\u539F\u4F4D\u7F6E\u79FB\u52A8\u5230\u76EE\u6807\u4F4D\u7F6E\u3002</p><p>2.MoveFrom:\u4ECE\u76EE\u6807\u4F4D\u7F6E\u79FB\u52A8\u5230\u539F\u4F4D\u7F6E\u3002</p><p>3.MoveAdd:\u968F\u65F6\u95F4\u79FB\u52A8\u6E38\u620F\u5BF9\u8C61\u7684\u4F4D\u7F6E\uFF0C\u6839\u636E\u63D0\u4F9B\u7684\u91CF\u3002</p><p>4.MoveBy:\u589E\u52A0\u63D0\u4F9B\u7684\u5750\u6807\u5230\u6E38\u620F\u5BF9\u8C61\u7684\u4F4D\u7F6E\u3002\uFF08\u4E0EMoveAdd\u4E00\u6837\uFF09</p><p>5.MoveUpdate:\u7C7B\u4F3C\u4E8EMoveTo\uFF0C\u5728Update()\u6216FixedUpdate()\u65B9\u6CD5\u6216\u5FAA\u73AF\u73AF\u5883\u4E2D\u8C03\u7528\u3002\u63D0\u4F9B\u6BCF\u5E27\u6539\u53D8\u5C5E\u6027\u503C\u7684\u73AF\u5883\u3002\u4E0D\u4F9D\u8D56\u4E8EEaseType\u3002</p></blockquote><p>\u4F7F\u7528\u52A8\u753B\u7684\u65B9\u6CD5\u4E00\u822C\u6709\u4E24\u79CD\u91CD\u8F7D\u5F62\u5F0F\uFF1A</p><blockquote><p>1.\u6700\u5C0F\u5B9A\u5236\u9009\u9879\uFF1A\u53EA\u9700\u63D0\u4F9B\u6700\u5C11\u5FC5\u9700\u53C2\u8D5B\u3002</p><p>2.\u5B8C\u5168\u5B9A\u5236\u9009\u9879\uFF1A\u53EF\u5B9A\u5236\u6240\u6709\u53C2\u6570\u3002</p></blockquote><p>\u5982\uFF1A</p><blockquote><p>MoveTo(GameObject target, Vector3 position, float time)</p><p>MoveTo(GameObject target, Hashtable args)</p></blockquote><p>\u5BF9\u4E8Eargs\u7684\u53C2\u6570\u5982\u4E0B\uFF1A</p><p>Hashtable Hash(params object[] args)\uFF1A</p><p>\u7528\u4E8E\u6784\u5EFA\u53C2\u6570\u7684\u901A\u7528\u65B9\u6CD5\u3002\u5176\u5947\u6570\u4F4D\u4E3A\u53C2\u6570\u540D\u79F0\uFF0C\u5076\u6570\u4F4D\u5BF9\u5E94\u7684\u53C2\u6570\u503C\u3002</p><p>\u5982\uFF1A</p><blockquote><p>iTween.Hash(\u201Cposition\u201D, new Vector3(10,20,-30) ,\u201Ctime\u201D, 1</p><p>,\u201Cooptype\u201D, Tween.LoopType.pingPong</p><p>,\u201Constart\u201D, \u201CFunctionName\u201D</p><p>,\u201Cislocal\u201D, true));</p></blockquote><p>\u8FD9\u4E2A\u53C2\u6570\u8BB2\u89E3\u53EF\u4EE5\u770B\u4E0A\u9762\u7684\u4ECB\u7ECD</p><p>\u4EE5MoveTo()\u65B9\u6CD5\u4E3A\u4F8B\uFF1A</p><blockquote><p>var args = new Hashtable();</p><p>//\u7528\u4E8E\u6807\u8BC6iTween\u5B9E\u4F8B\u7684\u540D\u79F0\uFF0C\u53EF\u901A\u8FC7Stop(\u201Cname\u201D)\u505C\u6B62\u6307\u5B9A\u540D\u79F0\u7684iTween\u3002</p><p>args.Add(\u201Cname\u201D,\u201CmyMoveTo\u201D );</p><p>//\u6E38\u620F\u5BF9\u8C61\u79FB\u52A8\u5230\u7684\u4F4D\u7F6E\uFF0C\u53EF\u4E3A Vector3 \u6216 Transform \u7C7B\u578B\u3002\u4F18\u5148\u4E8Exyz\u53C2\u8D5B</p><p>args.Add(\u201Cposition\u201D, Vector3.up);</p><p>//\u6E38\u620F\u5BF9\u8C61\u79FB\u52A8\u7684\u8DEF\u5F84\uFF0C\u53EF\u4E3A Vector3[] \u6216 Transform[] \u7C7B\u578B\u3002\u53EF\u901A\u8FC7 iTweenPath\u7F16\u8F91\u5E76\u83B7\u53D6\u8DEF\u5F84\u3002</p><p>args.Add(\u201Cpath\u201D, iTweenPath.GetPath(\u201CpathName\u201D));</p><p>//\u662F\u5426\u79FB\u52A8\u5230\u8DEF\u5F84\u7684\u8D77\u59CB\u4F4D\u7F6E\uFF08false:\u6E38\u620F\u5BF9\u8C61\u7ACB\u5373\u5904\u4E8E\u8DEF\u5F84\u7684\u8D77\u59CB\u70B9\uFF0Ctrue\uFF1A\u6E38\u620F\u5BF9\u8C61\u5C06\u4ECE\u539F\u59CB\u4F4D\u7F6E\u79FB\u52A8\u5230\u8DEF\u5F84\u7684\u8D77\u59CB\u70B9\u3002\uFF09args.Add(\u201Cmovetopath\u201D, false);</p><p>//\u76EE\u6807\u4F4D\u7F6E x \u8F74\u7684\u503C\uFF0C\u4E0B\u540C</p><p>args.Add(\u201Cx\u201D, 10);</p><p>args.Add(\u201Cy\u201D, 10);</p><p>args.Add(\u201Cz\u201D, 10);</p><p>//\u662F\u5426\u8BA9\u6E38\u620F\u5BF9\u8C61\u59CB\u7EC8\u9762\u671D\u8DEF\u5F84\u884C\u8FDB\u7684\u65B9\u5411\uFF0C\u62D0\u5F2F\u7684\u5730\u65B9\u4F1A\u81EA\u52A8\u65CB\u8F6C\u6A21\u578B\u3002\uFF08\u5982\u679C\u4F60\u53D1\u73B0\u4F60\u7684\u6E38\u620F\u5BF9\u8C61\u5728\u5BFB\u8DEF\u7684\u65F6\u5019\u59CB\u7EC8\u90FD\u662F\u4E00\u4E2A\u65B9\u5411\u90A3\u4E48\u4E00\u5B9A\u8981\u6253\u5F00\u8FD9\u4E2A\u3002\uFF09</p><p>args.Add(\u201Corienttopath\u201D, true);</p><p>//\u6E38\u620F\u5BF9\u8C61\u79FB\u52A8\u8FC7\u7A0B\u4E2D\u59CB\u7EC8\u6CE8\u89C6\u7684\u76EE\u6807\u70B9\uFF0C\u53EF\u4E3A Vector3 \u6216 Transform \u7C7B\u578B\u3002\uFF08\u5F53\u201Corienttopath\u201D\u4E3Atrue\u65F6\uFF0C\u8BE5\u53C2\u6570\u65E0\u6548\uFF09</p><p>args.Add(\u201Clooktarget\u201D, Vector3.zero);</p><p>//\u6E38\u620F\u5BF9\u8C61\u770B\u5411&quot;looktarget&quot; \u7684\u79D2\u6570\u3002</p><p>args.Add(\u201Clooktime\u201D, 0.8);</p><p>//\u5F53\u5305\u542B&quot;path&quot;\u53C2\u6570\u4E14&quot;orienttopath&quot;\u4E3Atrue\u65F6\uFF0C \u8BE5\u503C\u7528\u4E8E\u8BA1\u7B97&quot;looktarget&quot;\u7684\u503C\uFF0C\u8868\u793A\u6E38\u620F\u7269\u4F53\u770B\u7740\u524D\u65B9\u7684\u70B9\u7684\u4F4D\u7F6E\uFF08\u767E\u5206\u6BD4\uFF0C\u9ED8\u8BA4\u4E3A0.05\uFF09</p><p>args.Add(\u201Clookahead\u201D, 0.01);</p><p>//\u9650\u5236\u4EC5\u5728\u6307\u5B9A\u7684\u8F74\u4E0A\u65CB\u8F6C</p><p>args.Add(\u201Caxis\u201D, \u201Cy\u201D);</p><p>//\u662F\u5426\u4F7F\u7528\u5C40\u90E8\u5750\u6807\u7CFB\uFF08\u76F8\u5BF9\u4E8E\u7236\u7269\u4F53\u7684\u5750\u6807\uFF09\uFF0C\u9ED8\u8BA4\u4E3Afalse\u3002</p><p>args.Add(\u201Cislocal\u201D, true);</p><p>//\u52A8\u753B\u6267\u884C\u7684\u65F6\u957F</p><p>args.Add(\u201Ctime\u201D, 3);</p><p>//\u53EF\u4EE5\u7528\u6765\u66FF\u6362\u201Ctime\u201D\u53C2\u6570\uFF0C\u4EE5\u5141\u8BB8\u52A8\u753B\u57FA\u4E8E\u901F\u5EA6\u8FD0\u884C\u3002\uFF08\u540C\u65F6\u63D0\u4F9B&quot;time&quot;\u548C&quot;speed&quot;\u53C2\u6570\uFF0C\u5C06\u4F7F\u7528&quot;speed&quot;\u53C2\u6570\uFF09</p><p>args.Add(\u201Cspeed\u201D, 5);</p><p>//\u5EF6\u65F6</p><p>args.Add(\u201Cdelay\u201D, 2);</p><p>//\u7F13\u52A8\u7C7B\u578B\uFF0C\u679A\u4E3E\u6216\u5B57\u7B26\u4E32\u540D\u79F0\u3002[<a href="http://www.robertpenner.com/easing/easing_demo.html" target="_blank" rel="noopener">demo</a>]</p><p>args.Add(\u201Ceasetype\u201D, iTween.EaseType.linear);</p><p>//\u5FAA\u73AF\u7C7B\u578B</p><p>args.Add(\u201Clooptype\u201D, iTween.LoopType.none);</p><p>//\u5728\u52A8\u753B\u5F00\u59CB\u65F6\u8C03\u7528\u7684\u65B9\u6CD5\u7684\u540D\u79F0\u3002</p><p>args.Add(\u201Constart\u201D, \u201CfunName\u201D);</p><p>//\u6301\u6709&quot;onstart&quot; \u65B9\u6CD5\u7684\u6E38\u620F\u5BF9\u8C61\u3002</p><p>args.Add(\u201Constarttarget\u201D, gameObject);</p><p>//\u53D1\u9001\u7ED9&quot;onstart&quot;\u65B9\u6CD5\u7684\u53C2\u6570\u3002System.Object \u7C7B\u578B</p><p>args.Add(\u201Constartparams\u201D,\u201C\u52A8\u753B\u5F00\u59CB\u6267\u884C\u201D);</p><p>//\u5728\u52A8\u753B\u6267\u884C\u8FC7\u7A0B\u4E2D\u7684\u6BCF\u5E27\u8C03\u7528\u3002</p><p>args.Add(\u201Conupdate\u201D, \u201CfunName\u201D);</p><p>args.Add(\u201Conupdatetarget\u201D, gameObject);</p><p>args.Add(\u201Conupdateparams\u201D,Time.time);</p><p>//\u5728\u52A8\u753B\u6267\u884C\u8FC7\u7A0B\u4E2D\u7684\u6BCF\u5E27\u8C03\u7528\u3002</p><p>args.Add(\u201Concomplete\u201D, \u201CfunName\u201D);</p><p>args.Add(\u201Concompletetarget\u201D, gameObject);</p><p>args.Add(\u201Concompleteparams\u201D,\u201C\u52A8\u753B\u5DF2\u6267\u884C\u5B8C\u201D);</p><p>//\u6B64\u53C2\u6570\u5C06\u88AB\u8D4B\u4E88useRealTime\u9759\u6001\u79C1\u6709\u53D8\u91CF\u3002\u662F\u5426\u4F7F\u7528\u771F\u5B9E\u6E38\u620F\u65F6\u95F4\uFF08\u4E0D\u88ABTime.timeScale\u5F71\u54CD\u7684\u65F6\u95F4\uFF09</p><p>args.Add(\u201Cignoretimescale\u201D,false);</p><p>//\u6CE8\u518C\u52A8\u753B\u5230\u76EE\u6807\u6E38\u620F\u5BF9\u8C61</p><p>iTween.MoveTo(gameObject, args);</p></blockquote><h2 id="3.%E7%89%A9%E4%BD%93%E7%9A%84%E9%A2%9C%E8%89%B2%E5%8F%98%E5%8C%96" tabindex="-1"><span class="prefix"></span><span class="content">3.\u7269\u4F53\u7684\u989C\u8272\u53D8\u5316</span><span class="suffix"></span></h2><p>\u51713\u79CD\u989C\u8272\u6E10\u53D8\u65B9\u6CD5\uFF1A</p><blockquote><p>1.ColorTo:\u4ECE\u539F\u59CB\u989C\u8272\u6E10\u53D8\u5230\u76EE\u6807\u989C\u8272\u3002</p><p>2.ColorFrom\uFF1A\u4ECE\u7ED9\u5B9A\u7684\u989C\u8272\u6E10\u53D8\u56DE\u539F\u59CB\u989C\u8272</p><p>3.ColorUpdate:\u7C7B\u4F3C\u4E8EColorTo,\u5728Update\u65B9\u6CD5\u6216\u7C7B\u4F3C\u4E8E\u5FAA\u73AF\u7684\u73AF\u5883\u4E2D\u8C03\u7528\uFF0C\u63D0\u4F9B\u6BCF\u5E27\u6539\u53D8\u5C5E\u6027\u503C\u7684\u73AF\u5883\u3002\u4E0D\u4F9D\u8D56\u4E8EEaseType\u3002</p></blockquote><p>\u53C2\u6570\u8BF4\u660E\uFF1A</p><blockquote><p>1.color:\u6839\u636E\u7EC4\u4EF6\u7684\u5B58\u5728\u4E0E\u5426\uFF0C\u8BE5\u503C\u5C06\u88AB\u5E94\u7528\u4E8E\u76EE\u6807\u5BF9\u8C61\u7684GUITexture\u7EC4\u4EF6 \u6216 GUIText\u7EC4\u4EF6 \u6216 renderer\u7EC4\u4EF6 \u6216 light\u7EC4\u4EF6\u3002</p><p>2.namedValueColor\uFF1A\u5F53\u6548\u679C\u662F\u5E94\u7528\u5728renderer(\u6E32\u67D3\u5668)\u7EC4\u4EF6\u4E0A\u65F6\uFF0C\u6B64\u53C2\u6570\u786E\u5B9A\u5177\u4F53\u5E94\u7528\u5230\u54EA\u4E2A\u5DF2\u547D\u540D\u989C\u8272\u503C\u4E0A\u3002</p><p>3.includechildren\uFF1A\u6548\u679C\u662F\u5426\u5E94\u7528\u4E8E\u5B50\u5BF9\u8C61\uFF0C\u9ED8\u8BA4true\u3002</p></blockquote><p>\u5B9E\u73B0\u7ED9\u5B9A\u6E38\u620F\u5BF9\u8C61\u7684\u6DE1\u5165\u6DE1\u51FA\u6548\u679C\uFF0C\u51713\u79CD\u65B9\u6CD5\uFF1A</p><blockquote><p>1.FadeTo\uFF1A\u4ECE\u5F53\u524D\u900F\u660E\u5EA6\u6E10\u53D8\u5230\u76EE\u6807\u900F\u660E\u5EA6\u3002\uFF08\u5185\u90E8\u8C03\u7528ColorTo\uFF09\u3002</p><p>2.FadeFrom:\u4ECE\u7ED9\u5B9A\u900F\u660E\u5EA6\u6E10\u53D8\u90FD\u539F\u59CB\u900F\u660E\u5EA6\u3002\uFF08\u5185\u90E8\u8C03\u7528ColorFrom\uFF09\u3002</p><p>3.FadeUpdate:\u7C7B\u4F3C\u4E8EFadeTo,\u5728Update\u65B9\u6CD5\u6216\u7C7B\u4F3C\u4E8E\u5FAA\u73AF\u7684\u73AF\u5883\u4E2D\u8C03\u7528\uFF0C\u63D0\u4F9B\u6BCF\u5E27\u6539\u53D8\u5C5E\u6027\u503C\u7684\u73AF\u5883\u3002\u4E0D\u4F9D\u8D56\u4E8EEaseType\uFF08\u5185\u90E8\u8C03\u7528ColorUpdate\uFF09\u3002</p></blockquote><p>\u53C2\u6570\u8BF4\u660E\uFF1A</p><blockquote><p>alpha \u548C amount \u53C2\u6570: \u5747\u4E3A\u6700\u7EC8\u900F\u660E\u5EA6\uFF0Camount \u4F18\u5148\u4E8Ealpha\u3002\u5185\u90E8\u5B9E\u73B0\u662F\u4EC5\u6539\u53D8color.a\u7684\u503C\uFF0C\u518D\u8C03\u7528\u5BF9\u5E94\u7684Color\u65B9\u6CD5\u3002</p></blockquote><h2 id="4.%E6%91%84%E5%83%8F%E6%9C%BA%E6%B7%A1%E5%85%A5%E6%B7%A1%E5%87%BA" tabindex="-1"><span class="prefix"></span><span class="content">4.\u6444\u50CF\u673A\u6DE1\u5165\u6DE1\u51FA</span><span class="suffix"></span></h2><p>7\u79CD\u4E0E\u6444\u50CF\u673A\u6DE1\u5165\u6DE1\u51FA\u76F8\u5173\u7684\u65B9\u6CD5\uFF1A</p><blockquote><p>1.CameraFadeTo:\u900F\u660E\u5EA6\u4ECE\u5F53\u524D\u503C\u6E10\u53D8\u5230\u6307\u5B9A\u503C\uFF0C\u53D6\u503C\uFF080~1\uFF090\uFF1A\u5B8C\u5168\u900F\u660E\uFF0C1:\u5B8C\u5168\u4E0D\u900F\u660E\u3002</p><p>2.CameraFadeFrom\uFF1A\u4ECE\u7ED9\u5B9A\u7684\u900F\u660E\u5EA6\u6E10\u53D8\u5230\u539F\u59CB\u503C\u3002</p><p>3.CameraFadeAdd\uFF1A\u521B\u5EFA\u4E00\u4E2A\u7528\u4E8E\u6A21\u62DF\u6444\u76F8\u673A\u7684\u6DE1\u5165\u6DE1\u51FA\u7684\u6E38\u620F\u5BF9\u8C61(\u5982\u679C\u5B83\u4E0D\u5B58\u5728)\u3002\u9700\u8981\u5728\u5728\u6CE8\u518C\u6DE1\u5165\u6DE1\u51FA\u6548\u679C\u4E4B\u524D\u8C03\u7528\u8BE5\u65B9\u6CD5\u3002</p><p>4.CameraTexture\uFF1A\u521B\u5EFA\u5E76\u8FD4\u56DE\u4E00\u4E2A\u5168\u5C4F\u7684 Texture2D\uFF0C\u7528\u4E8E\u6444\u8C61\u673A\u7684\u6DE1\u5165\u6DE1\u51FA\u3002\u8BE5Texture2D\u4F5C\u4E3ACameraFadeAdd()\u7684\u53C2\u6570\u3002</p><p>5.CameraFadeDepth\uFF1A\u6539\u53D8\u6444\u76F8\u673A\u7684\u6DE1\u5165\u6DE1\u51FA\u6DF1\u5EA6(CameraFadeAdd()\u6240\u521B\u5EFA\u7684\u5BF9\u8C61\u7684z\u8F74\u503C\uFF09</p><p>6.CameraFadeSwap\uFF1A\u91CD\u8BBE\u6DE1\u5165\u5355\u7EAF\u6548\u679C\u6240\u4F7F\u7528\u7684\u7EB9\u7406CameraFadeAdd\u6240\u521B\u5EFA\u7684\u5BF9\u8C61\u7684guiTexture.texture\uFF09\u3002</p><p>7.CameraFadeDestroy\uFF1A\u5220\u9664\u6444\u76F8\u673A\u7684\u6DE1\u5165\u6DE1\u51FA\u6548\u679C\uFF08\u9500\u6BC1ameraFadeAdd\u6240\u521B\u5EFA\u7684\u5BF9\u8C61\uFF09</p></blockquote><h2 id="5.%E9%9F%B3%E9%A2%91%E6%96%B9%E6%B3%95" tabindex="-1"><span class="prefix"></span><span class="content">5.\u97F3\u9891\u65B9\u6CD5</span><span class="suffix"></span></h2><p>\u97F3\u9891\u53D8\u5316\u65B9\u6CD5</p><blockquote><p>1.AudioTo:\u6E10\u53D8AudioSource\u7684\u97F3\u91CF\u548C\u97F3\u8C03\u5230\u76EE\u6807\u503C\u3002</p><p>2.AudioFrom:\u5C06AudioSource\u7684\u97F3\u91CF\u548C\u97F3\u8C03\u4ECE\u7ED9\u5B9A\u7684\u503C\u6E10\u53D8\u5230\u539F\u59CB\u503C\u3002</p><p>3.AudioUpdate:\u7C7B\u4F3C\u4E8EAudioTo\uFF0C\u5728Update\u65B9\u6CD5\u6216\u7C7B\u4F3C\u4E8E\u5FAA\u73AF\u7684\u73AF\u5883\u4E2D\u8C03\u7528\uFF0C\u63D0\u4F9B\u6BCF\u5E27\u6539\u53D8\u5C5E\u6027\u503C\u7684\u73AF\u5883\u3002\u4E0D\u4F9D\u8D56\u4E8EEaseType\u3002</p></blockquote><p>\u97F3\u9891\u64AD\u653E\u65B9\u6CD5</p><blockquote><p>Stab:\u64AD\u653EAudioClip\u4E00\u6B21\uFF0C\u4E0D\u7528\u624B\u52A8\u52A0\u8F7DAudioSource\u7EC4\u4EF6\u3002</p></blockquote><h2 id="6.look%E7%B1%BB%E6%96%B9%E6%B3%95" tabindex="-1"><span class="prefix"></span><span class="content">6.Look\u7C7B\u65B9\u6CD5</span><span class="suffix"></span></h2><blockquote><p>1.LookTo\uFF1A\u65CB\u8F6C\u6E38\u620F\u5BF9\u8C61\u4F7F\u5176\u9762\u671D\u6307\u5B9A\u7684Transform \u6216 Vector3</p><p>2.LookFrom\uFF1A\u4F7F\u6E38\u620F\u5BF9\u8C61\u4ECE\u63D0\u4F9B\u7684\u65B9\u5411\u65CB\u8F6C\u56DE\u539F\u6765\u6240\u9762\u671D\u7684\u65B9\u5411\u3002</p><p>3.LookUpdate:\u7C7B\u4F3C\u4E8ELookTo\uFF0C\u5728Update\u65B9\u6CD5\u6216\u7C7B\u4F3C\u4E8E\u5FAA\u73AF\u7684\u73AF\u5883\u4E2D\u8C03\u7528\uFF0C\u63D0\u4F9B\u6BCF\u5E27\u6539\u53D8\u5C5E\u6027\u503C\u7684\u73AF\u5883\u3002\u4E0D\u4F9D\u8D56\u4E8EEaseType\u3002</p></blockquote><p>\u8BF4\u660E\uFF1A\u6E38\u620F\u5BF9\u8C61\u7684\u6B63\u9762\u6307\u7684\u662F\u6E38\u620F\u5BF9\u8C61\u7684z\u8F74\u65B9\u5411\uFF0C\u4E5F\u5C31\u662F\u4F7F\u6E38\u620F\u5BF9\u8C61\u7684z\u8F74\u6307\u5411\u76EE\u6807\u70B9\u3002</p><h2 id="7.%E6%97%8B%E8%BD%AC%E6%96%B9%E6%B3%95" tabindex="-1"><span class="prefix"></span><span class="content">7.\u65CB\u8F6C\u65B9\u6CD5</span><span class="suffix"></span></h2><blockquote><p>1.RotateTo:\u65CB\u8F6C\u6E38\u620F\u7269\u4F53\u5230\u6307\u5B9A\u6B27\u62C9\u89D2\u89D2\u5EA6\u3002</p><p>2.RotateFrom:\u5C06\u6E38\u620F\u7269\u4F53\u4ECE\u7ED9\u7684\u6B27\u62C9\u89D2\u5EA6\u65CB\u8F6C\u56DE\u539F\u59CB\u89D2\u5EA6\u3002</p><p>3.RotateAdd:\u5BF9\u6E38\u620F\u7269\u4F53\u7684\u65CB\u8F6C\u89D2\u5EA6\u968F\u7740\u65F6\u95F4\u589E\u52A0\u6240\u63D0\u4F9B\u7684\u6B27\u62C9\u89D2\uFF08Vector3\u4E09\u4E2A\u503C\u89E3\u6790\uFF1AX,Y,Z\u5404\u4EE3\u8868\u56F4\u7ED5\u54EA\u4E2A\u8F74\u8F6C\u52A8\u3002\u5176\u8F6C\u52A8\u89D2\u5EA6\u5C31\u662FX\uFF0CY,Z\u3001\u7684\u503C\u7684\u5927\u5C0F\u3002amount:\u6B27\u62C9\u89D2\u5927\u5C0F\uFF09</p><p>4.RotateBy:\u5C06\u63D0\u4F9B\u7684\u503C\u4E58\u4EE5360\uFF0C\u5176\u4F59\u4E0ERotateAdd\u4E00\u6837\u3002\u4E5F\u5C31\u662F\u63D0\u4F9B\u7684\u503C\u4E3A\u6BCF\u4E2A\u8F74\u4E0A\u65CB\u8F6C\u7684\u5468\u6570\u3002</p><p>5.RotateUpdate:\u7C7B\u4F3C\u4E8ERotateTo\uFF0C\u5728Update\u65B9\u6CD5\u6216\u7C7B\u4F3C\u4E8E\u5FAA\u73AF\u7684\u73AF\u5883\u4E2D\u8C03\u7528\uFF0C\u63D0\u4F9B\u6BCF\u5E27\u6539\u53D8\u5C5E\u6027\u503C\u7684\u73AF\u5883\u3002\u4E0D\u4F9D\u8D56\u4E8EEaseType\u3002</p></blockquote><p>\uFF08Look\u7C7B\u65B9\u6CD5\u662F\u57FA\u4E8E\u76EE\u6807\u70B9\u7684\u65CB\u8F6C\uFF0CRotate\u7C7B\u65B9\u6CD5\u662F\u57FA\u4E8E\u89D2\u5EA6\u7684\u65CB\u8F6C\u3002\uFF09</p><h2 id="8.%E7%89%A9%E4%BD%93%E5%A4%A7%E5%B0%8F%E7%BC%A9%E6%94%BE" tabindex="-1"><span class="prefix"></span><span class="content">8.\u7269\u4F53\u5927\u5C0F\u7F29\u653E</span><span class="suffix"></span></h2><blockquote><p>1.ScaleTo:\u6539\u53D8\u6E38\u620F\u5BF9\u8C61\u7684\u6BD4\u4F8B\u5927\u5C0F\u5230\u6211\u4EEC\u63D0\u4F9B\u7684\u503C\u3002</p><p>2.ScaleFrom:\u5C06\u7269\u4F53\u7684\u5927\u5C0F\u4ECE\u6211\u4EEC\u63D0\u4F9B\u7684\u503C\u53D8\u5316\u5230\u539F\u672C\u7684\u5927\u5C0F\u3002</p><p>3.ScaleAdd:\u589E\u52A0\u6E38\u620F\u7269\u4F53\u7684\u5927\u5C0F\u3002</p><p>4.ScaleBy:\u6210\u500D\u5730\u6539\u53D8\u7269\u4F53\u7684\u5927\u5C0F\u3002 Amount\u53C2\u6570\u4E3A\u5404\u8F74\u4E0A\u7684\u500D\u6570\u3002</p><p>ScaleUpdate:\u7C7B\u4F3C\u4E8EScaleTo\uFF0C\u5728Update\u65B9\u6CD5\u6216\u7C7B\u4F3C\u4E8E\u5FAA\u73AF\u7684\u73AF\u5883\u4E2D\u8C03\u7528\uFF0C\u63D0\u4F9B\u6BCF\u5E27\u6539\u53D8\u5C5E\u6027\u503C\u7684\u73AF\u5883\u3002\u4E0D\u4F9D\u8D56\u4E8EEaseType\u3002</p></blockquote><h2 id="9.%E6%99%83%E5%8A%A8%E6%95%88%E6%9E%9C%E6%96%B9%E6%B3%95" tabindex="-1"><span class="prefix"></span><span class="content">9.\u6643\u52A8\u6548\u679C\u65B9\u6CD5</span><span class="suffix"></span></h2><blockquote><p>1.PunchPosition:\u5BF9\u7269\u4F53\u7684\u4F4D\u7F6E\u6DFB\u52A0\u4E00\u4E2A\u6447\u6643\u7684\u529B\uFF0C\u4F7F\u5176\u6447\u6643\u6700\u7EC8\u5F52\u4E8E\u539F\u6765\u7684\u4F4D\u7F6E \u5176\u6643\u52A8\u5927\u5C0F\u548C\u65B9\u5411\u7531\u63D0\u4F9B\u7684amount(Vector3)\u51B3\u5B9A\u3002</p><p>2.PunchRotation\uFF1A\u5BF9\u7269\u4F53\u7684\u65CB\u8F6C\u6DFB\u52A0\u4E00\u4E2A\u6447\u6643\u7684\u529B\uFF0C\u4F7F\u5176\u65CB\u8F6C\u6700\u7EC8\u5F52\u4E8E\u521D\u59CB\u503C\u3002\u5176\u65CB\u8F6C\u89D2\u5EA6\u5927\u5C0F\u548C\u65B9\u5411\u7531\u63D0\u4F9B\u7684Vector3\u51B3\u5B9A\uFF0C\u5EFA\u8BAE\u7528\u5355\u8F74\u800C\u4E0D\u662F\u6574\u4E2AVector3\uFF0C\u4F8B\u5982\uFF080\uFF0C1\uFF0C0\uFF09\u662F\u7ED5Y\u8F74\u65CB\u8F6C\uFF0C\u89D2\u5EA6\u5927\u5C0F\u7531Vector3 Y\u8F74\u503C\u5927\u5C0F\u51B3\u5B9A\u3002</p><p>PunchScale\uFF1A\u5BF9\u7269\u4F53\u7684\u5927\u5C0F\u6BD4\u4F8B\u6DFB\u52A0\u4E00\u4E2A\u6447\u6643\u7684\u529B\uFF0C\u4F7F\u5176\u5927\u5C0F\u6BD4\u4F8B\u53D8\u5316\u6700\u7EC8\u5F52\u4E8E\u521D\u59CB\u503C\u3002\u5176\u5927\u5C0F\u6BD4\u4F8B\u53D8\u5316\u65B9\u5411\u548C\u5927\u5C0F\u7531\u63D0\u4F9B\u7684Vector3\u51B3\u5B9A\u3002\u4F8B\u5982\uFF080\uFF0C1\uFF0C0\uFF09\u662F\u5728Y\u8F74\u65B9\u5411\u5BF9\u7269\u4F53\u5927\u5C0F\u53D8\u5316\uFF08\u5373\u53D8\u5316\u7269\u4F53\u7684\u9AD8\uFF09\uFF0C\u5927\u5C0F\u7531\u8BE5\u65B9\u5411\u7684\u503C\u5927\u5C0F\u51B3\u5B9A\u3002</p></blockquote><p>\u8870\u51CF\u6643\u52A8\u6548\u679C\u65B9\u6CD5</p><blockquote><p>1.ShakePosition\uFF1A\u6839\u636E\u63D0\u4F9B\u7684amount\u8870\u51CF\u5176\u503C\u968F\u673A\u6447\u52A8\u6E38\u620F\u7269\u4F53\u7684\u4F4D\u7F6E\uFF0C\u5176\u6643\u52A8\u5927\u5C0F\u548C\u65B9\u5411\u7531\u63D0\u4F9B\u7684amount(Vector3)\u51B3\u5B9A\uFF08\u65B9\u5411\u6839\u636EVector3\u968F\u673A\uFF0C\u6643\u52A8\u5927\u5C0F\uFF0C\u7531\u5404\u4E2A\u65B9\u5411\u7684\u503C\u7684\u5927\u5C0F\u51B3\u5B9A\uFF09\u3002</p><p>2.ShakeRotation\uFF1A\u6839\u636E\u63D0\u4F9B\u7684amount\u8870\u51CF\u5176\u503C\u968F\u673A\u6446\u52A8\u65CB\u8F6C\u6E38\u620F\u7269\u4F53\u7684\u89D2\u5EA6 \u3002Vector3\u4E09\u4E2A\u503C\u89E3\u6790\uFF1AX,Y,Z\u5404\u4EE3\u8868\u56F4\u7ED5\u54EA\u4E2A\u8F74\u65CB\u8F6C\u3002\u5176\u8F6C\u52A8\u89D2\u5EA6\u5C31\u662FX\uFF0CY,Z\u3001\u7684\u503C\u7684\u5927\u5C0F\u3002</p><p>3.ShakeScale\uFF1A\u6839\u636E\u63D0\u4F9B\u7684amount\u8870\u51CF\u5176\u503C\u968F\u673A\u6446\u52A8\u6539\u53D8\u6E38\u620F\u7269\u4F53\u7684\u5927\u5C0F\u3002\u5176\u5927\u5C0F\u6BD4\u4F8B\u53D8\u5316\u65B9\u5411\u548C\u5927\u5C0F\u7531\u63D0\u4F9B\u7684Vector3\u51B3\u5B9A\u3002\u4F8B\u5982\uFF080\uFF0C1\uFF0C0\uFF09\u662F\u5728Y\u8F74\u65B9\u5411\u5BF9\u7269\u4F53\u5927\u5C0F\u53D8\u5316\uFF08\u5373\u53D8\u5316\u7269\u4F53\u7684\u9AD8\uFF09\uFF0C\u5927\u5C0F\u7531\u8BE5\u65B9\u5411\u7684\u503C\u5927\u5C0F\u51B3\u5B9A\u3002</p></blockquote><h2 id="10.%E5%80%BC%E6%96%B9%E6%B3%95" tabindex="-1"><span class="prefix"></span><span class="content">10.\u503C\u65B9\u6CD5</span><span class="suffix"></span></h2><blockquote><p>1.ValueTo\uFF1A\u8FD4\u56DE\u4E00\u4E2A\u201Cfrom\u201D\u548C\u201Cto\u201D\u4E4B\u95F4\u7684\u63D2\u503C\uFF0C\u4EE5\u8C03\u7528\u201Conupdate\u201D\u56DE\u8C03\u51FD\u6570\u3002\u201Conupdate\u201D\u56DE\u8C03\u662F\u5FC5\u9700\u7684\uFF0C\u4E14\u5B83\u63A5\u6536\u4E00\u4E2A\u4E0E\u201Cfrom\u201D\u548C\u201Cto\u201D\u76F8\u540C\u7C7B\u578B\u7684\u53C2\u6570\u3002\u652F\u6301\u7684\u503C\u7C7B\u578B\uFF1A float \u3001 double \u3001Vector3 \u3001Vector2 \u3001Color \u3001Rect \u3002</p><p>2.\u5728Update()\u4E2D\u8C03\u7528\u7684\u503C\u65B9\u6CD5\uFF1AFloatUpdate\u3001Vector3Update\u3001Vector2Update\u3001RectUpdate\u3002\u8FD9\u4E9B\u65B9\u6CD5\u8FD4\u56DE\u4E00\u4E2A\u5728\u63D0\u4F9B\u7684\u4E24\u4E2A\u503C\u4E4B\u95F4\u7684\u63D2\u503C\uFF0C\u5927\u5C0F\u53D8\u5316\u6839\u636E\u63D0\u4F9B\u7684\u901F\u5EA6\u3002</p></blockquote><h2 id="11.%E5%A4%96%E9%83%A8%E5%B7%A5%E5%85%B7%E6%96%B9%E6%B3%95" tabindex="-1"><span class="prefix"></span><span class="content">11.\u5916\u90E8\u5DE5\u5177\u65B9\u6CD5</span><span class="suffix"></span></h2><p>\u52A8\u753B\u63A7\u5236\uFF1A</p><blockquote><p>1.Pause:\u6682\u505C</p><p>2.Resume:\u6062\u590D</p><p>3.Stop:\u505C\u6B62\u5E76\u9500\u6BC1iTween\u3002</p></blockquote><p>\u7ED8\u5236\u65B9\u6CD5\uFF1A</p><blockquote><p>1.DrawLine\uFF1A\u7ED8\u5236\u7EBF\u6761\u3002(\u4F7F\u7528Gizmos.DrawLine)</p><p>2.DrawLineGizmos\uFF1A\u4E0EDrawLine\u76F8\u540C\u3002</p><p>3.DrawLineHandles\uFF1A\uFF08 \u4F7F\u7528UnityEditor.Handles.DrawLine\uFF0C\u6682\u65F6\u4E0D\u53EF\u7528\uFF09</p><p>4.DrawPath\uFF1A\u7ED8\u5236\u5F2F\u66F2\u7684\u8DEF\u5F84\u3002</p><p>5.DrawPathGizmos\uFF1A\u4E0EDrawPath\u76F8\u540C\u3002</p><p>6.DrawPathHandles\uFF1A\uFF08\u4F7F\u7528UnityEditor.Handles.DrawLine\uFF0C\u6682\u65F6\u4E0D\u53EF\u7528\uFF09</p><p>\u6CE8\uFF1A\u7ED8\u5236\u65B9\u6CD5\u53EA\u80FD\u5728\u53EA\u80FD\u5728OnDrawGizmos()\u548C OnDrawGizmosSelected()\u4E2D\u88AB\u8C03\u7528\uFF0C\u7528\u4E8E\u5728Scene\u89C6\u56FE\u4E2D\u7ED8\u5236\u7EBF\u6761\u548C\u8DEF\u5F84\u3002</p></blockquote><p>\u5176\u5B83\u65B9\u6CD5\uFF1A</p><blockquote><p>1.Count:\u8FD4\u56DEiTween\u7684\u6570\u91CF\u3002</p><p>2.PathLength:\u8FD4\u56DE\u8DEF\u5F84\u7684\u957F\u5EA6\u3002</p><p>3.PutOnPath:\u6839\u636E\u63D0\u4F9B\u7684\u767E\u5206\u6BD4\u5C06\u6E38\u620F\u7269\u4F53\u7F6E\u4E8E\u6240\u63D0\u4F9B\u8DEF\u5F84\u4E0A\u3002</p><p>4.PointOnPath:\u8FD4\u56DE\u8DEF\u5F84\u4E0A\u6307\u5B9A\u767E\u5206\u6BD4\u5904\u7684 Vector3 \u3002</p></blockquote><h2 id="12.itweenpath" tabindex="-1"><span class="prefix"></span><span class="content">12.iTweenPath</span><span class="suffix"></span></h2><p>iTweenPath\u7C7B\u7528\u4E8E\u5728Scene\u89C6\u56FE\u4E2D\u7F16\u8F91\u8DEF\u5F84\u3002</p><p>\u4F7F\u7528\u65B9\u6CD5\uFF1A</p><blockquote><p>1.\u5C06iTweenPath\u811A\u672C\u7ED1\u5B9A\u5230\u6E38\u620F\u5BF9\u8C61\u4E0A\u3002</p><p>2.\u7F16\u8F91Inspector\u89C6\u56FE\u4E2DNode Count\u5C5E\u6027\u53EF\u8BBE\u7F6E\u8282\u70B9\u6570\u53CA\u8282\u70B9\u4F4D\u7F6E\uFF0C\u4E5F\u53EF\u4EE5\u5728Scene\u89C6\u56FE\u4E2D\u62D6\u52A8\u8282\u70B9\u6765\u6539\u53D8\u8282\u70B9\u7684\u4F4D\u7F6E\u3002</p><p>3.GetPath\u65B9\u6CD5\uFF1A\u83B7\u53D6\u6307\u5B9A\u540D\u79F0\u7684\u8DEF\u5F84\u3002</p><p>4.GetPathReversed\u65B9\u6CD5\uFF1A\u8FD4\u56DE\u6307\u5B9A\u540D\u79F0\u7684\u8DEF\u5F84\u7684\u53CD\u8F6C\u3002</p></blockquote><figure><img src="'+s+'" alt="image-20220120114154514"></figure>',76),d=[r],g={tag:["unity","iTween"],cover:"/2022-05-11-09-04-28.png",tinyCover:"/cover/2022-05-11-09-04-28.png",coverWidth:564,coverHeight:1039,coverPrimary:"b8466d",coverSecondary:"47b992",meta:[]},c={__name:"index",setup(i,{expose:p}){return o({meta:[]}),p({frontmatter:{tag:["unity","iTween"],cover:"/2022-05-11-09-04-28.png",tinyCover:"/cover/2022-05-11-09-04-28.png",coverWidth:564,coverHeight:1039,coverPrimary:"b8466d",coverSecondary:"47b992",meta:[]}}),(u,m)=>(a(),t("div",null,d))}};typeof e=="function"&&e(c);export{c as default,g as frontmatter};