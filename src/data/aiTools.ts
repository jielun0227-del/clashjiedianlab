export type AiTool = {
  name: string;
  category: string;
  description: string;
  url: string;
};

export const aiCategories = [
  '对话与通用助手',
  '搜索与研究',
  '编程与建站',
  '写作与办公',
  '图片与设计',
  '视频与数字人',
  '音频与会议',
  '自动化与模型平台'
];

export const aiTools: AiTool[] = [
  { name: 'ChatGPT', category: '对话与通用助手', description: '通用对话、多模态与内容处理', url: 'https://chatgpt.com/' },
  { name: 'Claude', category: '对话与通用助手', description: '长文阅读、推理与写作协作', url: 'https://claude.ai/' },
  { name: 'Gemini', category: '对话与通用助手', description: 'Google 多模态智能助手', url: 'https://gemini.google.com/' },
  { name: 'Microsoft Copilot', category: '对话与通用助手', description: '微软搜索与通用 AI 助手', url: 'https://copilot.microsoft.com/' },
  { name: 'Grok', category: '对话与通用助手', description: 'xAI 对话、推理与信息处理', url: 'https://grok.com/' },
  { name: 'DeepSeek', category: '对话与通用助手', description: '中文推理、问答和代码辅助', url: 'https://chat.deepseek.com/' },
  { name: 'Kimi', category: '对话与通用助手', description: '中文长文、搜索与资料整理', url: 'https://www.kimi.com/' },
  { name: '通义千问 Qwen', category: '对话与通用助手', description: '阿里通用对话与内容创作', url: 'https://www.qwen.ai/' },
  { name: '豆包', category: '对话与通用助手', description: '中文对话与日常创作助手', url: 'https://www.doubao.com/' },
  { name: '腾讯元宝', category: '对话与通用助手', description: '腾讯问答、搜索与文档处理', url: 'https://yuanbao.tencent.com/' },
  { name: 'Z.ai（智谱）', category: '对话与通用助手', description: 'GLM 模型与智能体入口', url: 'https://z.ai/' },
  { name: 'Mistral Le Chat', category: '对话与通用助手', description: 'Mistral 通用对话助手', url: 'https://chat.mistral.ai/' },
  { name: 'Meta AI', category: '对话与通用助手', description: 'Meta 对话与创意助手', url: 'https://www.meta.ai/' },
  { name: 'Poe', category: '对话与通用助手', description: '多模型与机器人聚合平台', url: 'https://poe.com/' },
  { name: 'Character.AI', category: '对话与通用助手', description: '角色对话与互动内容创作', url: 'https://character.ai/' },

  { name: 'Perplexity', category: '搜索与研究', description: '带来源线索的 AI 搜索', url: 'https://www.perplexity.ai/' },
  { name: 'You.com', category: '搜索与研究', description: 'AI 搜索与多模型研究', url: 'https://you.com/' },
  { name: 'Semantic Scholar', category: '搜索与研究', description: '学术论文检索与关联发现', url: 'https://www.semanticscholar.org/' },
  { name: 'Genspark', category: '搜索与研究', description: '聚合搜索与任务型研究', url: 'https://www.genspark.ai/' },
  { name: 'Elicit', category: '搜索与研究', description: '论文检索与证据整理', url: 'https://elicit.com/' },
  { name: 'Consensus', category: '搜索与研究', description: '基于论文寻找研究结论', url: 'https://consensus.app/' },
  { name: 'NotebookLM', category: '搜索与研究', description: '基于自有资料的研究笔记', url: 'https://notebooklm.google.com/' },
  { name: 'SciSpace', category: '搜索与研究', description: '论文阅读与研究工作台', url: 'https://scispace.com/' },
  { name: 'ResearchRabbit', category: '搜索与研究', description: '通过论文关系发现文献', url: 'https://www.researchrabbit.ai/' },

  { name: 'GitHub Copilot', category: '编程与建站', description: 'IDE 与 GitHub 编程辅助', url: 'https://github.com/features/copilot' },
  { name: 'Cursor', category: '编程与建站', description: 'AI 原生代码编辑器', url: 'https://cursor.com/' },
  { name: 'Devin', category: '编程与建站', description: '面向软件任务的开发代理', url: 'https://devin.ai/' },
  { name: 'OpenAI Codex', category: '编程与建站', description: '代码库任务与开发协作', url: 'https://openai.com/codex/' },
  { name: 'Claude Code', category: '编程与建站', description: '终端和编辑器代码代理', url: 'https://code.claude.com/' },
  { name: 'Gemini CLI', category: '编程与建站', description: 'Google 终端编程工具', url: 'https://github.com/google-gemini/gemini-cli' },
  { name: 'Replit Agent', category: '编程与建站', description: '浏览器内生成和运行应用', url: 'https://replit.com/' },
  { name: 'v0', category: '编程与建站', description: '自然语言生成网页界面', url: 'https://v0.app/' },
  { name: 'Bolt', category: '编程与建站', description: '浏览器 Web 应用构建工具', url: 'https://bolt.new/' },
  { name: 'Lovable', category: '编程与建站', description: '对话式应用原型开发', url: 'https://lovable.dev/' },
  { name: 'JetBrains AI', category: '编程与建站', description: 'JetBrains 开发环境 AI 功能', url: 'https://www.jetbrains.com/ai/' },
  { name: 'Amazon Q Developer', category: '编程与建站', description: 'AWS 开发与代码任务助手', url: 'https://aws.amazon.com/q/developer/' },

  { name: 'Notion AI', category: '写作与办公', description: '工作区写作、整理与检索', url: 'https://www.notion.com/product/ai' },
  { name: 'Grammarly', category: '写作与办公', description: '英文润色、语气与校对', url: 'https://www.grammarly.com/' },
  { name: 'QuillBot', category: '写作与办公', description: '改写、摘要与语言校对', url: 'https://quillbot.com/' },
  { name: 'Gamma', category: '写作与办公', description: '生成演示文稿与网页内容', url: 'https://gamma.app/' },
  { name: 'Canva Magic Studio', category: '写作与办公', description: '图文、演示与视觉内容制作', url: 'https://www.canva.com/magic-studio/' },
  { name: 'Microsoft 365 Copilot', category: '写作与办公', description: 'Microsoft 365 文档协作助手', url: 'https://www.microsoft.com/microsoft-365/copilot' },
  { name: 'Gemini for Workspace', category: '写作与办公', description: 'Google Workspace AI 协作', url: 'https://workspace.google.com/solutions/ai/' },
  { name: 'Jasper', category: '写作与办公', description: '营销团队内容工作流', url: 'https://www.jasper.ai/' },
  { name: 'Copy.ai', category: '写作与办公', description: '营销文案与业务自动化', url: 'https://www.copy.ai/' },

  { name: 'Midjourney', category: '图片与设计', description: '提示词图像与视觉概念生成', url: 'https://www.midjourney.com/' },
  { name: 'Adobe Firefly', category: '图片与设计', description: 'Adobe 图像生成与创意编辑', url: 'https://www.adobe.com/products/firefly.html' },
  { name: 'Ideogram', category: '图片与设计', description: '图像、字体与海报生成', url: 'https://ideogram.ai/' },
  { name: 'Leonardo AI', category: '图片与设计', description: '图像生成与素材编辑', url: 'https://leonardo.ai/' },
  { name: 'Recraft', category: '图片与设计', description: '插画、图形与品牌视觉', url: 'https://www.recraft.ai/' },
  { name: 'Krea', category: '图片与设计', description: '实时图像生成与视觉调整', url: 'https://www.krea.ai/' },
  { name: 'Figma Make', category: '图片与设计', description: '提示词驱动的交互原型', url: 'https://www.figma.com/make/' },
  { name: 'Stability AI', category: '图片与设计', description: '图像模型与创意开发平台', url: 'https://stability.ai/' },

  { name: 'Runway', category: '视频与数字人', description: 'AI 视频生成与后期创作', url: 'https://runwayml.com/' },
  { name: 'Pika', category: '视频与数字人', description: '短视频生成与创意效果', url: 'https://pika.art/' },
  { name: 'Luma Dream Machine', category: '视频与数字人', description: '文字和图片生成视频镜头', url: 'https://lumalabs.ai/dream-machine' },
  { name: '可灵 Kling', category: '视频与数字人', description: '可灵 AI 视频创作平台', url: 'https://kling.ai/' },
  { name: 'Google Flow', category: '视频与数字人', description: 'Google 影视创意工作台', url: 'https://flow.google.com/' },
  { name: 'HeyGen', category: '视频与数字人', description: '数字人、口播与视频翻译', url: 'https://www.heygen.com/' },
  { name: 'Synthesia', category: '视频与数字人', description: '数字人培训与讲解视频', url: 'https://www.synthesia.io/' },

  { name: 'ElevenLabs', category: '音频与会议', description: '语音合成、配音与声音工具', url: 'https://elevenlabs.io/' },
  { name: 'Suno', category: '音频与会议', description: '描述生成与编辑音乐', url: 'https://suno.com/' },
  { name: 'Udio', category: '音频与会议', description: '歌曲生成、延展与混音', url: 'https://www.udio.com/' },
  { name: 'Descript', category: '音频与会议', description: '文本方式编辑音视频', url: 'https://www.descript.com/' },
  { name: 'Adobe Podcast', category: '音频与会议', description: '录音增强与播客处理', url: 'https://podcast.adobe.com/' },
  { name: 'Murf', category: '音频与会议', description: '商业配音与语音生成', url: 'https://murf.ai/' },
  { name: 'Otter', category: '音频与会议', description: '会议转写、摘要与协作', url: 'https://otter.ai/' },
  { name: 'Fireflies.ai', category: '音频与会议', description: '会议录音、摘要和检索', url: 'https://fireflies.ai/' },

  { name: 'Zapier AI', category: '自动化与模型平台', description: '跨应用 AI 自动化流程', url: 'https://zapier.com/ai' },
  { name: 'Make', category: '自动化与模型平台', description: '可视化应用与 AI 工作流', url: 'https://www.make.com/' },
  { name: 'n8n', category: '自动化与模型平台', description: '可自托管的自动化平台', url: 'https://n8n.io/' },
  { name: 'Dify', category: '自动化与模型平台', description: 'AI 应用、知识库与智能体', url: 'https://dify.ai/' },
  { name: 'Coze', category: '自动化与模型平台', description: '可视化智能体与应用搭建', url: 'https://www.coze.com/' },
  { name: 'Flowise', category: '自动化与模型平台', description: '可视化 LLM 工作流', url: 'https://flowiseai.com/' },
  { name: 'Hugging Face', category: '自动化与模型平台', description: '模型、数据集与应用社区', url: 'https://huggingface.co/' },
  { name: 'Ollama', category: '自动化与模型平台', description: '本地运行和管理开放模型', url: 'https://ollama.com/' },
  { name: 'LM Studio', category: '自动化与模型平台', description: '桌面本地模型与 API 服务', url: 'https://lmstudio.ai/' },
  { name: 'Replicate', category: '自动化与模型平台', description: '通过 API 运行 AI 模型', url: 'https://replicate.com/' },
  { name: 'OpenRouter', category: '自动化与模型平台', description: '统一接口调用多家模型', url: 'https://openrouter.ai/' }
];
