"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var list_view_1 = require("tns-core-modules/ui/list-view");
var dialogs_1 = require("tns-core-modules/ui/dialogs");
var label_1 = require("tns-core-modules/ui/label");
var observable_array_1 = require("tns-core-modules/data/observable-array");
var listViewArray = new observable_array_1.ObservableArray([
    { title: "The Da Vinci Code" },
    { title: "Harry Potter and the Chamber of Secrets" },
    { title: "The Alchemist" },
    { title: "The Godfather" },
    { title: "Goodnight Moon" },
    { title: "The Hobbit" }
]);
function onNavigatingTo(data) {
    var page = data.object;
    var container = page.getViewById("container");
    var listView = new list_view_1.ListView();
    listView.className = "list-group";
    listView.items = listViewArray;
    listView.on(list_view_1.ListView.itemLoadingEvent, function (args) {
        if (!args.view) {
            args.view = new label_1.Label();
            args.view.className = "list-group-item";
        }
        args.view.text = listViewArray.getItem(args.index).title;
    });
    listView.on(list_view_1.ListView.itemTapEvent, function (args) {
        var tappedItemIndex = args.index;
        var tappedItemView = args.view;
        dialogs_1.alert("Index: " + tappedItemIndex + " View: " + tappedItemView)
            .then(function () {
            console.log("Dialog closed!");
        });
    });
    container.addChild(listView);
}
exports.onNavigatingTo = onNavigatingTo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZS1iZWhpbmQtdHMtcGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvZGUtYmVoaW5kLXRzLXBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSwyREFBd0U7QUFFeEUsdURBQW9EO0FBQ3BELG1EQUFrRDtBQUNsRCwyRUFBeUU7QUFFekUsSUFBTSxhQUFhLEdBQUcsSUFBSSxrQ0FBZSxDQUFDO0lBQ3RDLEVBQUUsS0FBSyxFQUFFLG1CQUFtQixFQUFFO0lBQzlCLEVBQUUsS0FBSyxFQUFFLHlDQUF5QyxFQUFFO0lBQ3BELEVBQUUsS0FBSyxFQUFFLGVBQWUsRUFBRTtJQUMxQixFQUFFLEtBQUssRUFBRSxlQUFlLEVBQUU7SUFDMUIsRUFBRSxLQUFLLEVBQUUsZ0JBQWdCLEVBQUU7SUFDM0IsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFO0NBQzFCLENBQUMsQ0FBQztBQUVILHdCQUErQixJQUFJO0lBQy9CLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDekIsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUVoRCxJQUFNLFFBQVEsR0FBRyxJQUFJLG9CQUFRLEVBQUUsQ0FBQztJQUNoQyxRQUFRLENBQUMsU0FBUyxHQUFHLFlBQVksQ0FBQztJQUNsQyxRQUFRLENBQUMsS0FBSyxHQUFHLGFBQWEsQ0FBQztJQUUvQixRQUFRLENBQUMsRUFBRSxDQUFDLG9CQUFRLENBQUMsZ0JBQWdCLEVBQUUsVUFBQyxJQUFtQjtRQUN2RCxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBRWIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLGFBQUssRUFBRSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLGlCQUFpQixDQUFDO1FBQzVDLENBQUM7UUFDSyxJQUFJLENBQUMsSUFBSyxDQUFDLElBQUksR0FBRyxhQUFhLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFFcEUsQ0FBQyxDQUFDLENBQUM7SUFDSCxRQUFRLENBQUMsRUFBRSxDQUFDLG9CQUFRLENBQUMsWUFBWSxFQUFFLFVBQUMsSUFBbUI7UUFDbkQsSUFBTSxlQUFlLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNuQyxJQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ2pDLGVBQUssQ0FBQyxZQUFVLGVBQWUsZUFBVSxjQUFnQixDQUFDO2FBQ3JELElBQUksQ0FBQztZQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUNsQyxDQUFDLENBQUMsQ0FBQztJQUNYLENBQUMsQ0FBQyxDQUFDO0lBRUgsU0FBUyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNqQyxDQUFDO0FBM0JELHdDQTJCQyIsInNvdXJjZXNDb250ZW50IjpbIi8vID4+IHJlcXVpcmUtbGlzdC12aWV3LXRzXG5pbXBvcnQgeyBJdGVtRXZlbnREYXRhLCBMaXN0VmlldyB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xpc3Qtdmlld1wiO1xuLy8gPDwgcmVxdWlyZS1saXN0LXZpZXctdHNcbmltcG9ydCB7IGFsZXJ0IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiO1xuaW1wb3J0IHsgTGFiZWwgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYWJlbFwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5XCI7XG5cbmNvbnN0IGxpc3RWaWV3QXJyYXkgPSBuZXcgT2JzZXJ2YWJsZUFycmF5KFtcbiAgICB7IHRpdGxlOiBcIlRoZSBEYSBWaW5jaSBDb2RlXCIgfSxcbiAgICB7IHRpdGxlOiBcIkhhcnJ5IFBvdHRlciBhbmQgdGhlIENoYW1iZXIgb2YgU2VjcmV0c1wiIH0sXG4gICAgeyB0aXRsZTogXCJUaGUgQWxjaGVtaXN0XCIgfSxcbiAgICB7IHRpdGxlOiBcIlRoZSBHb2RmYXRoZXJcIiB9LFxuICAgIHsgdGl0bGU6IFwiR29vZG5pZ2h0IE1vb25cIiB9LFxuICAgIHsgdGl0bGU6IFwiVGhlIEhvYmJpdFwiIH1cbl0pO1xuXG5leHBvcnQgZnVuY3Rpb24gb25OYXZpZ2F0aW5nVG8oZGF0YSkge1xuICAgIGNvbnN0IHBhZ2UgPSBkYXRhLm9iamVjdDtcbiAgICBjb25zdCBjb250YWluZXIgPSBwYWdlLmdldFZpZXdCeUlkKFwiY29udGFpbmVyXCIpO1xuICAgIC8vID4+IGNyZWF0ZS1saXN0LXZpZXctY29kZS10c1xuICAgIGNvbnN0IGxpc3RWaWV3ID0gbmV3IExpc3RWaWV3KCk7XG4gICAgbGlzdFZpZXcuY2xhc3NOYW1lID0gXCJsaXN0LWdyb3VwXCI7XG4gICAgbGlzdFZpZXcuaXRlbXMgPSBsaXN0Vmlld0FycmF5O1xuICAgIC8vIFRoZSBpdGVtTG9hZGluZyBldmVudCBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgVUkgZm9yIGVhY2ggaXRlbSB0aGF0IGlzIHNob3duIGluIHRoZSBMaXN0Vmlldy5cbiAgICBsaXN0Vmlldy5vbihMaXN0Vmlldy5pdGVtTG9hZGluZ0V2ZW50LCAoYXJnczogSXRlbUV2ZW50RGF0YSkgPT4ge1xuICAgICAgICBpZiAoIWFyZ3Mudmlldykge1xuICAgICAgICAgICAgLy8gQ3JlYXRlIGxhYmVsIGlmIGl0IGlzIG5vdCBhbHJlYWR5IGNyZWF0ZWQuXG4gICAgICAgICAgICBhcmdzLnZpZXcgPSBuZXcgTGFiZWwoKTtcbiAgICAgICAgICAgIGFyZ3Mudmlldy5jbGFzc05hbWUgPSBcImxpc3QtZ3JvdXAtaXRlbVwiO1xuICAgICAgICB9XG4gICAgICAgICg8YW55PmFyZ3MudmlldykudGV4dCA9IGxpc3RWaWV3QXJyYXkuZ2V0SXRlbShhcmdzLmluZGV4KS50aXRsZTtcblxuICAgIH0pO1xuICAgIGxpc3RWaWV3Lm9uKExpc3RWaWV3Lml0ZW1UYXBFdmVudCwgKGFyZ3M6IEl0ZW1FdmVudERhdGEpID0+IHtcbiAgICAgICAgY29uc3QgdGFwcGVkSXRlbUluZGV4ID0gYXJncy5pbmRleDtcbiAgICAgICAgY29uc3QgdGFwcGVkSXRlbVZpZXcgPSBhcmdzLnZpZXc7XG4gICAgICAgIGFsZXJ0KGBJbmRleDogJHt0YXBwZWRJdGVtSW5kZXh9IFZpZXc6ICR7dGFwcGVkSXRlbVZpZXd9YClcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRpYWxvZyBjbG9zZWQhXCIpO1xuICAgICAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgLy8gPDwgY3JlYXRlLWxpc3Qtdmlldy1jb2RlLXRzXG4gICAgY29udGFpbmVyLmFkZENoaWxkKGxpc3RWaWV3KTtcbn1cbiJdfQ==