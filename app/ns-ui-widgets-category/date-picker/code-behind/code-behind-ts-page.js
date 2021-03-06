"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var date_picker_1 = require("tns-core-modules/ui/date-picker");
function onStackLoaded(args) {
    var stack = args.object;
    var datePicker = new date_picker_1.DatePicker();
    datePicker.day = 20;
    datePicker.month = 4;
    datePicker.year = 1980;
    datePicker.minDate = new Date(1970, 12, 31);
    datePicker.maxDate = new Date(2040, 4, 20);
    stack.addChild(datePicker);
}
exports.onStackLoaded = onStackLoaded;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZS1iZWhpbmQtdHMtcGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvZGUtYmVoaW5kLXRzLXBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSwrREFBNkQ7QUFLN0QsdUJBQThCLElBQWU7SUFDekMsSUFBTSxLQUFLLEdBQWdCLElBQUksQ0FBQyxNQUFNLENBQUM7SUFHdkMsSUFBTSxVQUFVLEdBQUcsSUFBSSx3QkFBVSxFQUFFLENBQUM7SUFDcEMsVUFBVSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUM7SUFDcEIsVUFBVSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7SUFDckIsVUFBVSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFHdkIsVUFBVSxDQUFDLE9BQU8sR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzVDLFVBQVUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUczQyxLQUFLLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQy9CLENBQUM7QUFmRCxzQ0FlQyIsInNvdXJjZXNDb250ZW50IjpbIi8vID4+IGRhdGUtcGlja2VyLXJlcXVpcmUtdHNcbmltcG9ydCB7IERhdGVQaWNrZXIgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kYXRlLXBpY2tlclwiO1xuLy8gPDwgZGF0ZS1waWNrZXItcmVxdWlyZS10c1xuaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyBTdGFja0xheW91dCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvc3RhY2stbGF5b3V0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBvblN0YWNrTG9hZGVkKGFyZ3M6IEV2ZW50RGF0YSkge1xuICAgIGNvbnN0IHN0YWNrID0gPFN0YWNrTGF5b3V0PmFyZ3Mub2JqZWN0O1xuXG4gICAgLy8gPj4gZGF0ZS1waWNrZXItY29kZS1iZWhpbmQtdHNcbiAgICBjb25zdCBkYXRlUGlja2VyID0gbmV3IERhdGVQaWNrZXIoKTtcbiAgICBkYXRlUGlja2VyLmRheSA9IDIwO1xuICAgIGRhdGVQaWNrZXIubW9udGggPSA0O1xuICAgIGRhdGVQaWNrZXIueWVhciA9IDE5ODA7XG4gICAgLy8gZGF0ZVBpY2tlci5kYXRlID0gbmV3IERhdGUoMTk4MCwgNCwgMjApOyAvLyB1c2luZyBEYXRlIG9iamVjdFxuXG4gICAgZGF0ZVBpY2tlci5taW5EYXRlID0gbmV3IERhdGUoMTk3MCwgMTIsIDMxKTtcbiAgICBkYXRlUGlja2VyLm1heERhdGUgPSBuZXcgRGF0ZSgyMDQwLCA0LCAyMCk7XG4gICAgLy8gPDwgZGF0ZS1waWNrZXItY29kZS1iZWhpbmQtdHNcblxuICAgIHN0YWNrLmFkZENoaWxkKGRhdGVQaWNrZXIpO1xufVxuIl19