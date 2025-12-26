module.exports = [
"[project]/src/features/videos/video.server.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>fetchVideoDetail,
    "fetchOEmbed",
    ()=>fetchOEmbed,
    "fetchVideos",
    ()=>fetchVideos
]);
async function fetchVideos() {
    const res = await fetch(`${("TURBOPACK compile-time value", "http://localhost:5000")}/videos`);
    if (!res.ok) {
        throw new Error('Failed to fetch videos');
    }
    return res.json();
}
async function fetchVideoDetail(videoId) {
    const res = await fetch(`${("TURBOPACK compile-time value", "http://localhost:5000")}/videos/${videoId}`);
    const json = await res.json();
    if (!res.ok) {
        throw new Error(json.message ?? 'Failed to fetch video');
    }
    return json;
}
async function fetchOEmbed(videoUrl) {
    const res = await fetch(`${("TURBOPACK compile-time value", "http://localhost:5000")}/videos/preview`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            videoUrl
        })
    });
    const json = await res.json();
    if (!res.ok) {
        throw new Error(json.message ?? 'Failed to fetch video Preview');
    }
    return json;
}
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/utils/fetchWithToken.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fetchWithToken",
    ()=>fetchWithToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-ssr] (ecmascript)");
;
async function fetchWithToken(url, options = {}) {
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cookies"])();
    const token = cookieStore.get('token')?.value;
    return fetch(`${url}`, {
        ...options,
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    });
}
}),
"[project]/src/features/posts/post.server.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createPost",
    ()=>createPost
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$fetchWithToken$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/fetchWithToken.ts [app-ssr] (ecmascript)");
;
async function createPost(formData) {
    const videoUrl = formData.get('url');
    const text = formData.get('text');
    const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$fetchWithToken$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchWithToken"])(`${("TURBOPACK compile-time value", "http://localhost:5000")}/posts`, {
        method: 'POST',
        body: JSON.stringify({
            videoUrl,
            text
        })
    });
    const json = await res.json();
    if (!res.ok) {
        throw new Error(json.message);
    }
    return json;
}
}),
"[project]/src/app/posts/create/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PostsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$videos$2f$video$2e$server$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/videos/video.server.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$posts$2f$post$2e$server$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/posts/post.server.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function PostsPage() {
    const [url, setUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [text, setText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [video, setVideo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [urlMessage, setUrlMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // URL入力が変わる毎にフェッチ（500msでデバウンス）
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!url) return;
        const timer = setTimeout(async ()=>{
            try {
                // 動画のプレビューを取得
                const video = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$videos$2f$video$2e$server$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchOEmbed"])(url);
                setVideo(video);
                setUrlMessage(null);
            } catch (e) {
                if (e instanceof Error) {
                    setUrlMessage(e.message);
                    setVideo(null);
                } else {
                    setUrlMessage('エラーが発生しました');
                }
            }
        }, 500);
        // クリーンアップ
        return ()=>{
            clearTimeout(timer);
        };
    }, [
        url
    ]);
    const handleSubmit = async (formData)=>{
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$posts$2f$post$2e$server$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createPost"])(formData);
            setMessage('投稿しました！'); //後でリダイレクトに変更
        } catch (e) {
            if (e instanceof Error) {
                setMessage(e.message);
            } else {
                setMessage('エラーが発生しました');
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-7xl mx-auto shadow-sm rounded-xl p-10",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            action: handleSubmit,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "block text-sm font-medium mb-2",
                            children: "YouTube URL"
                        }, void 0, false, {
                            fileName: "[project]/src/app/posts/create/page.tsx",
                            lineNumber: 60,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            name: "url",
                            value: url,
                            onChange: (e)=>setUrl(e.target.value),
                            placeholder: "https://www.youtube.com/watch?v=...",
                            className: "w-full rounded-lg border border-gray-500 shadow-sm p-1.5 text-sm"
                        }, void 0, false, {
                            fileName: "[project]/src/app/posts/create/page.tsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-1 mb-2 ml-2 text-sm",
                            children: urlMessage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-red-500",
                                children: urlMessage
                            }, void 0, false, {
                                fileName: "[project]/src/app/posts/create/page.tsx",
                                lineNumber: 70,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "invisible",
                                children: "placeholder"
                            }, void 0, false, {
                                fileName: "[project]/src/app/posts/create/page.tsx",
                                lineNumber: 72,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/posts/create/page.tsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/posts/create/page.tsx",
                    lineNumber: 59,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-xl border border-gray-500 shadow-sm bg-gray-50 p-4 min-h-40 mb-8",
                    children: video ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative w-60 aspect-video shrink-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    src: video.thumbnail_url,
                                    alt: video.title,
                                    fill: true,
                                    className: "object-cover rounded-lg"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/posts/create/page.tsx",
                                    lineNumber: 82,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/posts/create/page.tsx",
                                lineNumber: 81,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col justify-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-medium",
                                        children: video.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/posts/create/page.tsx",
                                        lineNumber: 90,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm mt-4",
                                        children: video.author_name
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/posts/create/page.tsx",
                                        lineNumber: 91,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/posts/create/page.tsx",
                                lineNumber: 89,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/posts/create/page.tsx",
                        lineNumber: 80,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-400",
                        children: "URL入力後、動画のプレビューを表示します"
                    }, void 0, false, {
                        fileName: "[project]/src/app/posts/create/page.tsx",
                        lineNumber: 95,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/posts/create/page.tsx",
                    lineNumber: 78,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "block text-sm font-medium mb-2",
                            children: "学習メモ"
                        }, void 0, false, {
                            fileName: "[project]/src/app/posts/create/page.tsx",
                            lineNumber: 101,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                            name: "text",
                            value: text,
                            onChange: (e)=>setText(e.target.value),
                            placeholder: "動画を見て学んだことや記録しておきたいことを自由に書いてください",
                            className: "w-full rounded-lg border border-gray-500 shadow-sm p-3 text-xl min-h-120"
                        }, void 0, false, {
                            fileName: "[project]/src/app/posts/create/page.tsx",
                            lineNumber: 102,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/posts/create/page.tsx",
                    lineNumber: 100,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "submit",
                    className: "rounded-lg bg-black text-white px-4 py-2 mt-4 hover:shadow-md transition",
                    children: "投稿する"
                }, void 0, false, {
                    fileName: "[project]/src/app/posts/create/page.tsx",
                    lineNumber: 112,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: `mt-4 text-xl ${message === '投稿しました！' ? 'text-green-500' : 'text-red-500'}`,
                    children: message
                }, void 0, false, {
                    fileName: "[project]/src/app/posts/create/page.tsx",
                    lineNumber: 119,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/posts/create/page.tsx",
            lineNumber: 57,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/posts/create/page.tsx",
        lineNumber: 56,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__242d5c3a._.js.map