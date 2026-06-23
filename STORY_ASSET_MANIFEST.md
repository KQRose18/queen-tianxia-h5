# 女王天下剧情与美术接入状态

## 当前结论

剧情 MVP 已经 ready，可以配合美术继续出图。

当前代码里已经有：

- 5 个男宠的可播放剧情入口
- 剧情页章节列表
- 剧情播放器
- 条漫宽度适配屏幕
- 市场买入 / 朝局诏令按角色倾向增加好感
- 剧情按好感门槛解锁，观看剧情只推进已观看进度
- 5 个男宠对应剧情背景条漫，其中部分章节已接入独立语义命名条漫

还未完全 ready 的部分：

- 每人 6 段完整正式剧情尚未全部扩写
- 解锁登场 CG 已归档到 `assets/story/unlocks`，并已接入解锁弹窗展示
- 好感结算互动图尚未接入
- HE / 高级剧情 CG 尚未接入
- 金币暴击、诏令成功、排行上升等通用结算图尚未接入

## 当前剧情章节数

- 沈砚：6 段，可作为首个完整角色样板
- 萧照：3 段，MVP 可跑，后续扩到 6 段
- 容与：3 段，MVP 可跑，后续扩到 6 段
- 谢长离：3 段，MVP 可跑，后续扩到 6 段
- 裴无咎：3 段，MVP 可跑，后续扩到 6 段

## 当前已接入剧情背景

这些图只用于剧情播放器，不替换后宫 Tab 封面。

- 沈砚：`shen_story_01_strip.png`、`shen_story_02_strip.png`、`shen_story_03_strip.png`，后续章节暂用旧 CG/封面占位
- 萧照：`xiao_story_01_strip.png`、`xiao_story_02_strip.png`，第 3 章暂用 `xiao-strip.png`
- 容与：`rong_story_01_strip.png`、`rong_story_02_strip.png`，第 3 章暂用 `rong-strip.png`
- 谢长离：`xie_story_01_strip.png`、`xie_story_02_strip.png`，第 3 章暂用 `xie-strip.png`
- 裴无咎：`pei_story_01_strip.png`、`pei_story_02_strip.png`、`pei_story_03_strip.png`

## 当前游戏已引用的男宠美术

- 后宫封面：5 人均已映射，位于 `assets/consorts`，当前锁定不替换。
- 剧情条漫：5 人均已映射到剧情播放器；沈砚 3 张、裴无咎 3 张、萧照 2 张、容与 2 张、谢长离 2 张，其余章节暂用早期通用条漫或旧 CG。
- 解锁登场图：5 人均已映射到新男宠解锁弹窗，位于 `assets/story/unlocks`。
- 启动页专用图：当前剧情和美术分叉 `019ef027-bb94-7600-b4fd-cbcbb687d9af` 负责后续交付；当前仍用 `opening-shen.png` 做临时启动背景。

## 已产出但未进入主游戏的美术

- `assets/project-intro/generated-art/*character-sheet*.png`：角色设定图，目前只用于项目介绍页，不进入主 H5。
- `assets/project-intro/generated-art/*date-cg.png`：约会/解锁备选图，其中一部分已复制为 `assets/story/unlocks/*_unlock.png` 并接入解锁弹窗。
- `assets/project-intro/generated-art/*story-strip-02.png`：早期条漫备选图，目前只用于项目介绍页；主 H5 优先使用 `assets/story/strips/*_story_*_strip.png`。
- 历史源目录仍有 5 张 `ig_*.png` 未归档到项目资产，待当前剧情和美术分叉补充语义后再决定接入位置。

## 第一批美术回传后优先接入

建议第一批先回传以下 22 张：

- 5 张解锁图：`*_unlock.png`
- 10 张剧情条漫：每人 2 张 `*_story_01_strip.png`、`*_story_02_strip.png`
- 5 张大成功结算图：`*_result_big.png`
- 2 张通用图：`result_money_big.png`、`result_unlock_consort.png`

## 接入策略

1. 后宫 Tab 封面图固定不动。
2. 新剧情条漫优先替换当前每章节的占位图。
3. 代码已升级为“每章节对应一张 strip”，后续直接按章节文件名接入。
4. 解锁图接入 `unlockOverlay`。
5. 结算图接入好感增加、金币暴击、诏令成功、排行上升这些反馈节点。
