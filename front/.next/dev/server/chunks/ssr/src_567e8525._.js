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
"[project]/src/features/posts/data:35fefa [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"4093d5243775fc4a8a846b4f90a5952fb73a841e8d":"createPost"},"src/features/posts/post.server.ts",""] */ __turbopack_context__.s([
    "createPost",
    ()=>createPost
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var createPost = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("4093d5243775fc4a8a846b4f90a5952fb73a841e8d", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "createPost"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vcG9zdC5zZXJ2ZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzZXJ2ZXInO1xyXG5pbXBvcnQgeyBmZXRjaFdpdGhUb2tlbiB9IGZyb20gJ0AvdXRpbHMvZmV0Y2hXaXRoVG9rZW4nO1xyXG5pbXBvcnQgeyBQb3N0TGlzdFJlc3BvbnNlIH0gZnJvbSAnLi9wb3N0LnR5cGUnO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoUG9zdHMoKTogUHJvbWlzZTxQb3N0TGlzdFJlc3BvbnNlW10+IHtcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMfS9wb3N0c2ApO1xyXG5cclxuICBpZiAoIXJlcy5vaykge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gZmV0Y2ggcG9zdHMnKTtcclxuICB9XHJcblxyXG4gIHJldHVybiByZXMuanNvbigpO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUG9zdChmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICBjb25zdCB2aWRlb1VybCA9IGZvcm1EYXRhLmdldCgndXJsJyk7XHJcbiAgY29uc3QgdGV4dCA9IGZvcm1EYXRhLmdldCgndGV4dCcpO1xyXG5cclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaFdpdGhUb2tlbihgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMfS9wb3N0c2AsIHtcclxuICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyB2aWRlb1VybCwgdGV4dCB9KSxcclxuICB9KTtcclxuXHJcbiAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gIGlmICghcmVzLm9rKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoanNvbi5tZXNzYWdlKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBqc29uO1xyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoicVNBY3NCIn0=
}),
"[project]/src/features/posts/components/PostForm.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PostForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$videos$2f$video$2e$server$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/videos/video.server.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$posts$2f$data$3a$35fefa__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/features/posts/data:35fefa [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
function PostForm() {
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
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$posts$2f$data$3a$35fefa__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createPost"])(formData);
        } catch (e) {
            if (e instanceof Error) {
                setMessage(e.message);
            } else {
                setMessage('エラーが発生しました');
            }
            return;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["redirect"])('/videos?success=2');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        action: handleSubmit,
        className: "shadow-sm rounded-xl p-10",
        children: [
            message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "bg-red-100 text-red-700 p-4 rounded-md mb-4 text-sm",
                children: message
            }, void 0, false, {
                fileName: "[project]/src/features/posts/components/PostForm.tsx",
                lineNumber: 61,
                columnNumber: 11
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-sm font-medium mb-2",
                        children: "YouTube URL"
                    }, void 0, false, {
                        fileName: "[project]/src/features/posts/components/PostForm.tsx",
                        lineNumber: 66,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        name: "url",
                        value: url,
                        onChange: (e)=>setUrl(e.target.value),
                        placeholder: "https://www.youtube.com/watch?v=...",
                        className: "w-full rounded-lg border border-gray-500 shadow-sm p-1.5 text-sm"
                    }, void 0, false, {
                        fileName: "[project]/src/features/posts/components/PostForm.tsx",
                        lineNumber: 67,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-1 mb-2 ml-2 text-sm",
                        children: urlMessage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-red-500",
                            children: urlMessage
                        }, void 0, false, {
                            fileName: "[project]/src/features/posts/components/PostForm.tsx",
                            lineNumber: 76,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "invisible",
                            children: "placeholder"
                        }, void 0, false, {
                            fileName: "[project]/src/features/posts/components/PostForm.tsx",
                            lineNumber: 78,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/features/posts/components/PostForm.tsx",
                        lineNumber: 74,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/posts/components/PostForm.tsx",
                lineNumber: 65,
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
                                fileName: "[project]/src/features/posts/components/PostForm.tsx",
                                lineNumber: 88,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/features/posts/components/PostForm.tsx",
                            lineNumber: 87,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col justify-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-medium",
                                    children: video.title
                                }, void 0, false, {
                                    fileName: "[project]/src/features/posts/components/PostForm.tsx",
                                    lineNumber: 96,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm mt-4",
                                    children: video.author_name
                                }, void 0, false, {
                                    fileName: "[project]/src/features/posts/components/PostForm.tsx",
                                    lineNumber: 97,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/posts/components/PostForm.tsx",
                            lineNumber: 95,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/posts/components/PostForm.tsx",
                    lineNumber: 86,
                    columnNumber: 13
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-gray-400",
                    children: "URL入力後、動画のプレビューを表示します"
                }, void 0, false, {
                    fileName: "[project]/src/features/posts/components/PostForm.tsx",
                    lineNumber: 101,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/features/posts/components/PostForm.tsx",
                lineNumber: 84,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-sm font-medium mb-2",
                        children: "学習メモ"
                    }, void 0, false, {
                        fileName: "[project]/src/features/posts/components/PostForm.tsx",
                        lineNumber: 107,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        name: "text",
                        value: text,
                        onChange: (e)=>setText(e.target.value),
                        placeholder: "動画を見て学んだことや記録しておきたいことを自由に書いてください",
                        className: "w-full whitespace-pre-wrap rounded-lg border border-gray-500 shadow-sm p-3 text-xl min-h-120"
                    }, void 0, false, {
                        fileName: "[project]/src/features/posts/components/PostForm.tsx",
                        lineNumber: 108,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/posts/components/PostForm.tsx",
                lineNumber: 106,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "submit",
                className: "rounded-lg bg-blue-400 text-white px-4 py-2 mt-4 hover:bg-blue-500 transition",
                children: "投稿する"
            }, void 0, false, {
                fileName: "[project]/src/features/posts/components/PostForm.tsx",
                lineNumber: 118,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/posts/components/PostForm.tsx",
        lineNumber: 58,
        columnNumber: 7
    }, this);
}
}),
"[project]/src/app/posts/create/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PostsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$posts$2f$components$2f$PostForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/posts/components/PostForm.tsx [app-ssr] (ecmascript)");
'use client';
;
;
function PostsPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-7xl mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-center text-lg text-gray-500 m-8",
                children: "YouTubeを見て学習記録やメモを残そう ✏️"
            }, void 0, false, {
                fileName: "[project]/src/app/posts/create/page.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$posts$2f$components$2f$PostForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/posts/create/page.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/posts/create/page.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_567e8525._.js.map