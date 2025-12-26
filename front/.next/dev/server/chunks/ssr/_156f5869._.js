module.exports = [
"[project]/src/features/posts/post.server.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"00fa116c6436c60204390aca75d3f209f42a19ffef":"fetchVideos","4093d5243775fc4a8a846b4f90a5952fb73a841e8d":"createPost","40ad8fd201bbec3a9dde4a20a6424a4e470ca5829f":"fetchOEmbed"},"",""] */ __turbopack_context__.s([
    "createPost",
    ()=>createPost,
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
        throw new Error(json.message);
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
    fetchOEmbed,
    createPost
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(fetchVideos, "00fa116c6436c60204390aca75d3f209f42a19ffef", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(fetchOEmbed, "40ad8fd201bbec3a9dde4a20a6424a4e470ca5829f", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createPost, "4093d5243775fc4a8a846b4f90a5952fb73a841e8d", null);
}),
"[project]/.next-internal/server/app/videos/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/features/posts/post.server.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$posts$2f$post$2e$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/posts/post.server.ts [app-rsc] (ecmascript)");
;
;
;
}),
"[project]/.next-internal/server/app/videos/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/features/posts/post.server.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "00fa116c6436c60204390aca75d3f209f42a19ffef",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$posts$2f$post$2e$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fetchVideos"],
    "4093d5243775fc4a8a846b4f90a5952fb73a841e8d",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$posts$2f$post$2e$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createPost"],
    "40ad8fd201bbec3a9dde4a20a6424a4e470ca5829f",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$posts$2f$post$2e$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fetchOEmbed"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$videos$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$features$2f$posts$2f$post$2e$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/videos/page/actions.js { ACTIONS_MODULE0 => "[project]/src/features/posts/post.server.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$posts$2f$post$2e$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/posts/post.server.ts [app-rsc] (ecmascript)");
}),
"[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/* eslint-disable import/no-extraneous-dependencies */ Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "registerServerReference", {
    enumerable: true,
    get: function() {
        return _server.registerServerReference;
    }
});
const _server = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)"); //# sourceMappingURL=server-reference.js.map
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

//# sourceMappingURL=_156f5869._.js.map