"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var main_view_ts_model_1 = require("./main-view-ts-model");
function onNavigatingTo(args) {
    var page = args.object;
    var mainViewModel = new main_view_ts_model_1.HelloWorldModel();
    page.bindingContext = mainViewModel;
}
exports.onNavigatingTo = onNavigatingTo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXZ2bS1wYXR0ZXJuLXRzLXBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtdnZtLXBhdHRlcm4tdHMtcGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLDJEQUF1RDtBQUl2RCx3QkFBK0IsSUFBZTtJQUMxQyxJQUFNLElBQUksR0FBUyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBRy9CLElBQU0sYUFBYSxHQUFHLElBQUksb0NBQWUsRUFBRSxDQUFDO0lBQzVDLElBQUksQ0FBQyxjQUFjLEdBQUcsYUFBYSxDQUFDO0FBQ3hDLENBQUM7QUFORCx3Q0FNQyIsInNvdXJjZXNDb250ZW50IjpbIlxuLy8gPj4gbXZ2bS1jb2RlLWJlaGluZC10c1xuaW1wb3J0IHsgSGVsbG9Xb3JsZE1vZGVsIH0gZnJvbSBcIi4vbWFpbi12aWV3LXRzLW1vZGVsXCI7XG5pbXBvcnQgeyBFdmVudERhdGEgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGVcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBvbk5hdmlnYXRpbmdUbyhhcmdzOiBFdmVudERhdGEpIHtcbiAgICBjb25zdCBwYWdlID0gPFBhZ2U+YXJncy5vYmplY3Q7XG5cbiAgICAvLyB1c2luZyB0aGUgdmlldyBtb2RlbCBhcyBiaW5kaW5nIGNvbnRleHQgZm9yIHRoZSBjdXJyZW50IHBhZ2VcbiAgICBjb25zdCBtYWluVmlld01vZGVsID0gbmV3IEhlbGxvV29ybGRNb2RlbCgpO1xuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSBtYWluVmlld01vZGVsO1xufVxuLy8gPDwgbXZ2bS1jb2RlLWJlaGluZC10c1xuIl19