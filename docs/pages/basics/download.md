---
title: 下载文件
---

# {{ $frontmatter.title }}

::: tip {{ $frontmatter.title }}
下载文件资源到本地，必须使用 `GET` 方法请求，并将请求配置的 `download` 属性设置为 `true`。
:::

## 普通的下载请求

可以下载文件资源到本地。

```ts
import axios from 'axios-miniprogram';

axios
  .get(
    'https://api.com/test',
    {},
    {
      download: true,
    },
  )
  .then((response) => {
    const {
      // 临时文件路径 (本地路径)。没传入 filePath 指定文件存储路径时会返回，下载后的文件会存储到一个临时文件
      tempFilePath,
    } = response;
  })
  .catch((error) => {
    // 失败之后做些什么
  });
```

## 携带参数的下载请求

也可以指定文件下载后存储的路径 (本地路径)。

```ts
import axios from 'axios-miniprogram';

axios
  .get(
    'https://api.com/test',
    {
      filePath: '你的本地路径',
    },
    {
      download: true,
    },
  )
  .then((response) => {
    const {
      // 指定文件下载后存储的路径 (本地路径)
      filePath,
    } = response;
  })
  .catch((error) => {
    // 失败之后做些什么
  });
```

## 监听下载进度

也可以监听下载进度变化。

```ts
import axios from 'axios-miniprogram';

axios
  .get(
    'https://api.com/test',
    {
      filePath: '你的本地路径',
    },
    {
      download: true,
      onDownloadProgress(event) {
        const {
          // 下载进度
          progress,

          // 已经下载的数据长度
          totalBytesSent,

          // 预期需要下载的数据总长度
          totalBytesExpectedToSend,
        } = event;
      },
    },
  )
  .then((response) => {
    const {
      // 指定文件下载后存储的路径 (本地路径)
      filePath,
    } = response;
  })
  .catch((error) => {
    // 失败之后做些什么
  });
```