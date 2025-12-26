(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/features/videos/components/PostContent.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PostContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function PostContent({ text, clampHeight }) {
    _s();
    const pRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null); //<p>と紐づけ
    const [isClamped, setIsClamped] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isOpened, setIsOpened] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PostContent.useEffect": ()=>{
            const el = pRef.current; //<p>を取得
            if (!el) return;
            // 全文の高さ ＞ 表示している高さ
            setIsClamped(el.scrollHeight > el.clientHeight);
        }
    }["PostContent.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "whitespace-pre-wrap",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: !isOpened ? `${clampHeight}` : '',
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    ref: pRef,
                    className: `text-sm leading-relaxed wrap-break-word ${isOpened ? '' : 'line-clamp-4'}`,
                    children: text
                }, void 0, false, {
                    fileName: "[project]/src/features/videos/components/PostContent.tsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, this),
                isClamped && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: (e)=>{
                        e.preventDefault(); //カードのLinkを適用しない
                        setIsOpened(!isOpened); //トグル処理（true/false切替）
                    },
                    className: "block mx-auto text-xs mt-2 text-gray-500 hover:underline hover:font-bold",
                    children: isOpened ? '閉じる' : '続きを見る'
                }, void 0, false, {
                    fileName: "[project]/src/features/videos/components/PostContent.tsx",
                    lineNumber: 35,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/videos/components/PostContent.tsx",
            lineNumber: 25,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/features/videos/components/PostContent.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
_s(PostContent, "KxDjWFgAdwpPyBFd2dq5/PtatAY=");
_c = PostContent;
var _c;
__turbopack_context__.k.register(_c, "PostContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_features_videos_components_PostContent_tsx_affa5e48._.js.map