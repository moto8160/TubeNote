module.exports = [
"[project]/src/features/videos/video.server.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"00a86535988c90f0a7917206dd528ad09750b93d31":"fetchVideos","4025af77da12364fa1b82111eeab3d950d9048eaee":"createPost","40cc40082ccedf3bb7f479c5fa0eae29b955b97b4a":"fetchOEmbed","40f6a4360ab6d671fc52635c07976a6f3e2df428d2":"default"},"",""] */ __turbopack_context__.s([
    "createPost",
    ()=>createPost,
    "default",
    ()=>fetchVideoDetail,
    "fetchOEmbed",
    ()=>fetchOEmbed,
    "fetchVideos",
    ()=>fetchVideos
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
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
async function createPost(formData) {
    const videoUrl = formData.get('url');
    const text = formData.get('text');
    const res = await fetch(`${("TURBOPACK compile-time value", "http://localhost:5000")}/posts`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
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
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    fetchVideos,
    fetchVideoDetail,
    fetchOEmbed,
    createPost
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(fetchVideos, "00a86535988c90f0a7917206dd528ad09750b93d31", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(fetchVideoDetail, "40f6a4360ab6d671fc52635c07976a6f3e2df428d2", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(fetchOEmbed, "40cc40082ccedf3bb7f479c5fa0eae29b955b97b4a", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createPost, "4025af77da12364fa1b82111eeab3d950d9048eaee", null);
}),
"[project]/.next-internal/server/app/videos/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/layout.tsx [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/features/videos/video.server.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$videos$2f$video$2e$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/videos/video.server.ts [app-rsc] (ecmascript)");
;
;
;
;
;
}),
"[project]/.next-internal/server/app/videos/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/layout.tsx [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/features/videos/video.server.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "00a86535988c90f0a7917206dd528ad09750b93d31",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$videos$2f$video$2e$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fetchVideos"],
    "4025af77da12364fa1b82111eeab3d950d9048eaee",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$videos$2f$video$2e$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createPost"],
    "40cc40082ccedf3bb7f479c5fa0eae29b955b97b4a",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$videos$2f$video$2e$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fetchOEmbed"],
    "40e1d5c0a0c5a7f3f43dc406b38acfe77e46fe4391",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$$RSC_SERVER_ACTION_0"],
    "40f6a4360ab6d671fc52635c07976a6f3e2df428d2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$videos$2f$video$2e$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$videos$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$features$2f$videos$2f$video$2e$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/videos/page/actions.js { ACTIONS_MODULE0 => "[project]/src/app/layout.tsx [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/src/features/videos/video.server.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$videos$2f$video$2e$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/videos/video.server.ts [app-rsc] (ecmascript)");
}),
"[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// This function ensures that all the exported values are valid server actions,
// during the runtime. By definition all actions are required to be async
// functions, but here we can only check that they are functions.
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ensureServerEntryExports", {
    enumerable: true,
    get: function() {
        return ensureServerEntryExports;
    }
});
function ensureServerEntryExports(actions) {
    for(let i = 0; i < actions.length; i++){
        const action = actions[i];
        if (typeof action !== 'function') {
            throw Object.defineProperty(new Error(`A "use server" file can only export async functions, found ${typeof action}.\nRead more: https://nextjs.org/docs/messages/invalid-use-server-value`), "__NEXT_ERROR_CODE", {
                value: "E352",
                enumerable: false,
                configurable: true
            });
        }
    }
} //# sourceMappingURL=action-validate.js.map
}),
];

//# sourceMappingURL=_5cdf0041._.js.map