import{i as t,o as r,c as a,j as e,k as n}from"./app.4eeffe1f.js";const s=n('<h1 id="tcp%E5%8D%8F%E8%AE%AE%E4%B9%8B%E6%8F%A1%E6%89%8B" tabindex="-1"><span class="prefix"></span><span class="content">TCP\u534F\u8BAE\u4E4B\u63E1\u624B</span><span class="suffix"></span></h1><p>TCP\uFF08Transmission Control Protocol \u4F20\u8F93\u63A7\u5236\u534F\u8BAE\uFF09\u662F\u4E00\u79CD\u9762\u5411\u8FDE\u63A5\u7684\u3001\u53EF\u9760\u7684\u3001\u57FA\u4E8E\u5B57\u8282\u6D41\u7684\u4F20\u8F93\u5C42\u901A\u4FE1\u534F\u8BAE\uFF0C\u7531IETF\u7684RFC 793\u5B9A\u4E49</p><p>\u5EFA\u7ACBTCP\u9700\u8981\u4E09\u6B21\u63E1\u624B\u624D\u80FD\u5EFA\u7ACB\uFF0C\u800C\u65AD\u5F00\u8FDE\u63A5\u5219\u9700\u8981\u56DB\u6B21\u63E1\u624B</p><h2 id="%E4%B8%89%E6%AC%A1%E6%8F%A1%E6%89%8Bthree-way-handshake" tabindex="-1"><span class="prefix"></span><span class="content">\u4E09\u6B21\u63E1\u624BThree-way Handshake</span><span class="suffix"></span></h2><p>\u9996\u5148Client\u7AEF\u53D1\u9001\u8FDE\u63A5\u8BF7\u6C42\u62A5\u6587\uFF0CServer\u7AEF\u63A5\u53D7\u8FDE\u63A5\u540E\u56DE\u590DACK\u62A5\u6587\uFF0C\u5E76\u4E3A\u8FD9\u6B21\u8FDE\u63A5\u5206\u914D\u8D44\u6E90\u3002Client\u7AEF\u63A5\u6536\u5230ACK\u62A5\u6587\u540E\u4E5F\u5411Server\u6BB5\u53D1\u751FACK\u62A5\u6587\uFF0C\u5E76\u5206\u914D\u8D44\u6E90\uFF0C\u8FD9\u6837TCP\u8FDE\u63A5\u5C31\u5EFA\u7ACB\u4E86\u3002</p><blockquote><p>SYN\uFF08synchronous\uFF09\u662FTCP/IP\u5EFA\u7ACB\u8FDE\u63A5\u65F6\u4F7F\u7528\u7684\u63E1\u624B\u4FE1\u53F7\u3002\u5728\u5BA2\u6237\u673A\u548C\u670D\u52A1\u5668\u4E4B\u95F4\u5EFA\u7ACB\u6B63\u5E38\u7684TCP\u7F51\u7EDC\u8FDE\u63A5\u65F6\uFF0C\u5BA2\u6237\u673A\u9996\u5148\u53D1\u51FA\u4E00\u4E2ASYN\u6D88\u606F\uFF0C\u670D\u52A1\u5668\u4F7F\u7528SYN+ACK\u5E94\u7B54\u8868\u793A\u63A5\u6536\u5230\u4E86\u8FD9\u4E2A\u6D88\u606F\uFF0C\u6700\u540E\u5BA2\u6237\u673A\u518D\u4EE5ACK\u6D88\u606F\u54CD\u5E94\u3002\u8FD9\u6837\u5728\u5BA2\u6237\u673A\u548C\u670D\u52A1\u5668\u4E4B\u95F4\u624D\u80FD\u5EFA\u7ACB\u8D77\u53EF\u9760\u7684TCP\u8FDE\u63A5\uFF0C\u6570\u636E\u624D\u53EF\u4EE5\u5728\u5BA2\u6237\u673A\u548C\u670D\u52A1\u5668\u4E4B\u95F4\u4F20\u9012\u3002<br> ACK (Acknowledgement\uFF09\u5373\u662F\u786E\u8BA4\u5B57\u7B26\uFF0C\u5728\u6570\u636E\u901A\u4FE1\u4E2D\uFF0C\u63A5\u6536\u7AD9\u53D1\u7ED9\u53D1\u9001\u7AD9\u7684\u4E00\u79CD\u4F20\u8F93\u7C7B\u63A7\u5236\u5B57\u7B26\u3002\u8868\u793A\u53D1\u6765\u7684\u6570\u636E\u5DF2\u786E\u8BA4\u63A5\u6536\u65E0\u8BEF\u3002 \u5728TCP/IP\u534F\u8BAE\u4E2D\uFF0C\u5982\u679C\u63A5\u6536\u65B9\u6210\u529F\u7684\u63A5\u6536\u5230\u6570\u636E\uFF0C\u90A3\u4E48\u4F1A\u56DE\u590D\u4E00\u4E2AACK\u6570\u636E\u3002\u901A\u5E38ACK\u4FE1\u53F7\u6709\u81EA\u5DF1\u56FA\u5B9A\u7684\u683C\u5F0F,\u957F\u5EA6\u5927\u5C0F,\u7531\u63A5\u6536\u65B9\u56DE\u590D\u7ED9\u53D1\u9001\u65B9\u3002</p></blockquote><h2 id="%E5%9B%9B%E6%AC%A1%E6%8F%A1%E6%89%8Bfour-way-handshake" tabindex="-1"><span class="prefix"></span><span class="content">\u56DB\u6B21\u63E1\u624BFour-way Handshake</span><span class="suffix"></span></h2><blockquote><p>\u3010\u6CE8\u610F\u3011\u4E2D\u65AD\u8FDE\u63A5\u7AEF\u53EF\u4EE5\u662FClient\u7AEF\uFF0C\u4E5F\u53EF\u4EE5\u662FServer\u7AEF\u3002 \u5047\u8BBEClient\u7AEF\u53D1\u8D77\u4E2D\u65AD\u8FDE\u63A5\u8BF7\u6C42\uFF0C\u4E5F\u5C31\u662F\u53D1\u9001FIN\u62A5\u6587\u3002Server\u7AEF\u63A5\u5230FIN\u62A5\u6587\u540E\uFF0C\u610F\u601D\u662F\u8BF4&quot;\u6211Client\u7AEF\u6CA1\u6709\u6570\u636E\u8981\u53D1\u7ED9\u4F60\u4E86&quot;\uFF0C\u4F46\u662F\u5982\u679C\u4F60\u8FD8\u6709\u6570\u636E\u6CA1\u6709\u53D1\u9001\u5B8C\u6210\uFF0C\u5219\u4E0D\u5FC5\u6025\u7740\u5173\u95EDSocket\uFF0C\u53EF\u4EE5\u7EE7\u7EED\u53D1\u9001\u6570\u636E\u3002\u6240\u4EE5\u4F60\u5148\u53D1\u9001ACK\uFF0C\u201C\u544A\u8BC9Client\u7AEF\uFF0C\u4F60\u7684\u8BF7\u6C42\u6211\u6536\u5230\u4E86\uFF0C\u4F46\u662F\u6211\u8FD8\u6CA1\u51C6\u5907\u597D\uFF0C\u8BF7\u7EE7\u7EED\u4F60\u7B49\u6211\u7684\u6D88\u606F\u201D\u3002\u8FD9\u4E2A\u65F6\u5019Client\u7AEF\u5C31\u8FDB\u5165FIN_WAIT\u72B6\u6001\uFF0C\u7EE7\u7EED\u7B49\u5F85Server\u7AEF\u7684FIN\u62A5\u6587\u3002\u5F53Server\u7AEF\u786E\u5B9A\u6570\u636E\u5DF2\u53D1\u9001\u5B8C\u6210\uFF0C\u5219\u5411Client\u7AEF\u53D1\u9001FIN\u62A5\u6587\uFF0C\u201C\u544A\u8BC9Client\u7AEF\uFF0C\u597D\u4E86\uFF0C\u6211\u8FD9\u8FB9\u6570\u636E\u53D1\u5B8C\u4E86\uFF0C\u51C6\u5907\u597D\u5173\u95ED\u8FDE\u63A5\u4E86\u201D\u3002Client\u7AEF\u6536\u5230FIN\u62A5\u6587\u540E\uFF0C&quot;\u5C31\u77E5\u9053\u53EF\u4EE5\u5173\u95ED\u8FDE\u63A5\u4E86\uFF0C\u4F46\u662F\u4ED6\u8FD8\u662F\u4E0D\u76F8\u4FE1\u7F51\u7EDC\uFF0C\u6015Server\u7AEF\u4E0D\u77E5\u9053\u8981\u5173\u95ED\uFF0C\u6240\u4EE5\u53D1\u9001ACK\u540E\u8FDB\u5165TIME_WAIT\u72B6\u6001\uFF0C\u5982\u679CServer\u7AEF\u6CA1\u6709\u6536\u5230ACK\u5219\u53EF\u4EE5\u91CD\u4F20\u3002\u201C\uFF0CServer\u7AEF\u6536\u5230ACK\u540E\uFF0C\u201C\u5C31\u77E5\u9053\u53EF\u4EE5\u65AD\u5F00\u8FDE\u63A5\u4E86\u201D\u3002Client\u7AEF\u7B49\u5F85\u4E862MSL\u540E\u4F9D\u7136\u6CA1\u6709\u6536\u5230\u56DE\u590D\uFF0C\u5219\u8BC1\u660EServer\u7AEF\u5DF2\u6B63\u5E38\u5173\u95ED\uFF0C\u90A3\u597D\uFF0C\u6211Client\u7AEF\u4E5F\u53EF\u4EE5\u5173\u95ED\u8FDE\u63A5\u4E86\u3002Ok\uFF0CTCP\u8FDE\u63A5\u5C31\u8FD9\u6837\u5173\u95ED\u4E86\uFF01 \u5728TIME_WAIT\u72B6\u6001\u4E2D\uFF0C\u5982\u679CTCP client\u7AEF\u6700\u540E\u4E00\u6B21\u53D1\u9001\u7684ACK\u4E22\u5931\u4E86\uFF0C\u5B83\u5C06\u91CD\u65B0\u53D1\u9001\u3002TIME_WAIT\u72B6\u6001\u4E2D\u6240\u9700\u8981\u7684\u65F6\u95F4\u662F\u4F9D\u8D56\u4E8E\u5B9E\u73B0\u65B9\u6CD5\u7684\u3002\u5178\u578B\u7684\u503C\u4E3A30\u79D2\u30011\u5206\u949F\u548C2\u5206\u949F\u3002\u7B49\u5F85\u4E4B\u540E\u8FDE\u63A5\u6B63\u5F0F\u5173\u95ED\uFF0C\u5E76\u4E14\u6240\u6709\u7684\u8D44\u6E90(\u5305\u62EC\u7AEF\u53E3\u53F7)\u90FD\u88AB\u91CA\u653E\u3002</p></blockquote><h2 id="%E3%80%90%E9%97%AE%E9%A2%981%E3%80%91%E4%B8%BA%E4%BB%80%E4%B9%88%E8%BF%9E%E6%8E%A5%E7%9A%84%E6%97%B6%E5%80%99%E6%98%AF%E4%B8%89%E6%AC%A1%E6%8F%A1%E6%89%8B%EF%BC%8C%E5%85%B3%E9%97%AD%E7%9A%84%E6%97%B6%E5%80%99%E5%8D%B4%E6%98%AF%E5%9B%9B%E6%AC%A1%E6%8F%A1%E6%89%8B%EF%BC%9F" tabindex="-1"><span class="prefix"></span><span class="content">\u3010\u95EE\u98981\u3011\u4E3A\u4EC0\u4E48\u8FDE\u63A5\u7684\u65F6\u5019\u662F\u4E09\u6B21\u63E1\u624B\uFF0C\u5173\u95ED\u7684\u65F6\u5019\u5374\u662F\u56DB\u6B21\u63E1\u624B\uFF1F</span><span class="suffix"></span></h2><p>\u7B54\uFF1A\u56E0\u4E3A\u5F53Server\u7AEF\u6536\u5230Client\u7AEF\u7684SYN\u8FDE\u63A5\u8BF7\u6C42\u62A5\u6587\u540E\uFF0C\u53EF\u4EE5\u76F4\u63A5\u53D1\u9001SYN+ACK\u62A5\u6587\u3002\u5176\u4E2DACK\u62A5\u6587\u662F\u7528\u6765\u5E94\u7B54\u7684\uFF0CSYN\u62A5\u6587\u662F\u7528\u6765\u540C\u6B65\u7684\u3002\u4F46\u662F\u5173\u95ED\u8FDE\u63A5\u65F6\uFF0C\u5F53Server\u7AEF\u6536\u5230FIN\u62A5\u6587\u65F6\uFF0C\u5F88\u53EF\u80FD\u5E76\u4E0D\u4F1A\u7ACB\u5373\u5173\u95EDSOCKET\uFF0C\u6240\u4EE5\u53EA\u80FD\u5148\u56DE\u590D\u4E00\u4E2AACK\u62A5\u6587\uFF0C\u544A\u8BC9Client\u7AEF\uFF0C\u201C\u4F60\u53D1\u7684FIN\u62A5\u6587\u6211\u6536\u5230\u4E86\u201D\u3002\u53EA\u6709\u7B49\u5230\u6211Server\u7AEF\u6240\u6709\u7684\u62A5\u6587\u90FD\u53D1\u9001\u5B8C\u4E86\uFF0C\u6211\u624D\u80FD\u53D1\u9001FIN\u62A5\u6587\uFF0C\u56E0\u6B64\u4E0D\u80FD\u4E00\u8D77\u53D1\u9001\u3002\u6545\u9700\u8981\u56DB\u6B65\u63E1\u624B\u3002</p><h2 id="%E3%80%90%E9%97%AE%E9%A2%982%E3%80%91%E4%B8%BA%E4%BB%80%E4%B9%88time_wait%E7%8A%B6%E6%80%81%E9%9C%80%E8%A6%81%E7%BB%8F%E8%BF%872msl(%E6%9C%80%E5%A4%A7%E6%8A%A5%E6%96%87%E6%AE%B5%E7%94%9F%E5%AD%98%E6%97%B6%E9%97%B4)%E6%89%8D%E8%83%BD%E8%BF%94%E5%9B%9E%E5%88%B0close%E7%8A%B6%E6%80%81%EF%BC%9F" tabindex="-1"><span class="prefix"></span><span class="content">\u3010\u95EE\u98982\u3011\u4E3A\u4EC0\u4E48TIME_WAIT\u72B6\u6001\u9700\u8981\u7ECF\u8FC72MSL(\u6700\u5927\u62A5\u6587\u6BB5\u751F\u5B58\u65F6\u95F4)\u624D\u80FD\u8FD4\u56DE\u5230CLOSE\u72B6\u6001\uFF1F</span><span class="suffix"></span></h2><p>\u7B54\uFF1A\u867D\u7136\u6309\u9053\u7406\uFF0C\u56DB\u4E2A\u62A5\u6587\u90FD\u53D1\u9001\u5B8C\u6BD5\uFF0C\u6211\u4EEC\u53EF\u4EE5\u76F4\u63A5\u8FDB\u5165CLOSE\u72B6\u6001\u4E86\uFF0C\u4F46\u662F\u6211\u4EEC\u5FC5\u987B\u5047\u8C61\u7F51\u7EDC\u662F\u4E0D\u53EF\u9760\u7684\uFF0C\u6709\u53EF\u4EE5\u6700\u540E\u4E00\u4E2AACK\u4E22\u5931\u3002\u6240\u4EE5TIME_WAIT\u72B6\u6001\u5C31\u662F\u7528\u6765\u91CD\u53D1\u53EF\u80FD\u4E22\u5931\u7684ACK\u62A5\u6587\u3002</p>',12),c=[s],A={title:"TCP\u534F\u8BAE\u4E4B\u63E1\u624B",tag:["TCP"],author:"Artiely",date:"2017-6-10",cover:"/2022-05-14-21-24-12.png",base64:"fefcfd",tinyCover:"/cover/2022-05-14-21-24-12.png",coverWidth:564,coverHeight:797,coverPrimary:"d0bcb6",coverSecondary:"2f4349",meta:[{property:"og:title",content:"TCP\u534F\u8BAE\u4E4B\u63E1\u624B"}]},E={__name:"2017-6-10-tcp",setup(i,{expose:o}){return t({title:"TCP\u534F\u8BAE\u4E4B\u63E1\u624B",meta:[{property:"og:title",content:"TCP\u534F\u8BAE\u4E4B\u63E1\u624B"}]}),o({frontmatter:{title:"TCP\u534F\u8BAE\u4E4B\u63E1\u624B",tag:["TCP"],author:"Artiely",date:"2017-6-10",cover:"/2022-05-14-21-24-12.png",base64:"fefcfd",tinyCover:"/cover/2022-05-14-21-24-12.png",coverWidth:564,coverHeight:797,coverPrimary:"d0bcb6",coverSecondary:"2f4349",meta:[{property:"og:title",content:"TCP\u534F\u8BAE\u4E4B\u63E1\u624B"}]}}),(l,C)=>(r(),a("div",null,c))}};typeof e=="function"&&e(E);export{E as default,A as frontmatter};
