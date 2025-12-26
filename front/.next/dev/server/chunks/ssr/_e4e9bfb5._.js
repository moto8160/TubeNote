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
"[project]/src/app/posts/create/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

const e = new Error("Could not parse module '[project]/src/app/posts/create/page.tsx'\n\nExpression expected");
e.code = 'MODULE_UNPARSABLE';
throw e;
}),
"[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// This file must be bundled in the app's client layer, it shouldn't be directly
// imported by the server.
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    callServer: null,
    createServerReference: null,
    findSourceMapURL: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    callServer: function() {
        return _appcallserver.callServer;
    },
    createServerReference: function() {
        return _client.createServerReference;
    },
    findSourceMapURL: function() {
        return _appfindsourcemapurl.findSourceMapURL;
    }
});
const _appcallserver = __turbopack_context__.r("[project]/node_modules/next/dist/client/app-call-server.js [app-ssr] (ecmascript)");
const _appfindsourcemapurl = __turbopack_context__.r("[project]/node_modules/next/dist/client/app-find-source-map-url.js [app-ssr] (ecmascript)");
const _client = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-server-dom-turbopack-client.js [app-ssr] (ecmascript)"); //# sourceMappingURL=action-client-wrapper.js.map
}),
];

//# sourceMappingURL=_e4e9bfb5._.js.map