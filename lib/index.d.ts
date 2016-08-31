interface XYPoint {
    type: "2dPoint";
    center: [number, number, number];
}
interface XYArc {
}
interface XYLine {
}
interface XYCircle {
}
interface XYPath {
    type: "2dPath";
    segments: (XYArc | XYLine)[];
}
interface XYNurbs {
}
interface XYModel {
}
declare var point: (x: any, y: any, z?: number) => XYPoint;
declare var arc: (x: any, y: any, z?: number) => XYPoint;
