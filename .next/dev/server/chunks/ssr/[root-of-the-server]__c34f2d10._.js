module.exports = [
"[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/app/news/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

const { jsxDEV: _jsxDEV } = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
{}/*#__PURE__*/ _jsxDEV(motion.div, {
    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto",
    initial: "hidden",
    animate: "show",
    variants: {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.15
            }
        }
    },
    children: newsData.map((item)=>/*#__PURE__*/ _jsxDEV(motion.div, {
            className: "bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300",
            whileHover: {
                scale: 1.03
            },
            variants: {
                hidden: {
                    opacity: 0,
                    y: 40
                },
                show: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: 0.5
                    }
                }
            },
            children: [
                /*#__PURE__*/ _jsxDEV("div", {
                    className: "relative w-full h-60 sm:h-72",
                    children: /*#__PURE__*/ _jsxDEV(Image, {
                        src: item.image,
                        alt: item.title,
                        fill: true,
                        className: "object-cover"
                    }, void 0, false, {
                        fileName: "[project]/app/news/page.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, /*TURBOPACK member replacement*/ __turbopack_context__.e)
                }, void 0, false, {
                    fileName: "[project]/app/news/page.tsx",
                    lineNumber: 23,
                    columnNumber: 7
                }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                /*#__PURE__*/ _jsxDEV("div", {
                    className: "p-6",
                    children: [
                        /*#__PURE__*/ _jsxDEV("h3", {
                            className: "text-2xl font-semibold text-gray-900 dark:text-white mb-2",
                            children: item.title
                        }, void 0, false, {
                            fileName: "[project]/app/news/page.tsx",
                            lineNumber: 32,
                            columnNumber: 9
                        }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                        /*#__PURE__*/ _jsxDEV("p", {
                            className: "text-gray-600 dark:text-gray-300",
                            children: item.description
                        }, void 0, false, {
                            fileName: "[project]/app/news/page.tsx",
                            lineNumber: 35,
                            columnNumber: 9
                        }, /*TURBOPACK member replacement*/ __turbopack_context__.e)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/news/page.tsx",
                    lineNumber: 31,
                    columnNumber: 7
                }, /*TURBOPACK member replacement*/ __turbopack_context__.e)
            ]
        }, item.id, true, {
            fileName: "[project]/app/news/page.tsx",
            lineNumber: 14,
            columnNumber: 5
        }, /*TURBOPACK member replacement*/ __turbopack_context__.e))
}, void 0, false, {
    fileName: "[project]/app/news/page.tsx",
    lineNumber: 2,
    columnNumber: 1
}, /*TURBOPACK member replacement*/ __turbopack_context__.e);
}),
"[project]/app/news/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/news/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__c34f2d10._.js.map