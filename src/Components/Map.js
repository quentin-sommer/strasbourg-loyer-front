import {Component, h} from 'preact'

const Map = (props) => (
  <div style={{
    backgroundImage: `url(${require('../sxb_map.png')})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
    maxWidth: '1382px',
  }}>
    <svg
      style={{
        verticalAlign: 'top',
        width: '100%',
        height: '100%'
      }}
      data-name="Calque 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1381.5 849">
      <defs>
      </defs>
      <title>sxb_map</title>
      <polygon id="16"
               onMouseOver={props.onDistrictHover}
               onTouchStart={props.onDistrictHover}
               onMouseOut={props.onDistrictOut}
               data-name="centre ville" class="district cls-1"
               points="518.54 353.51 534.05 392.96 581.91 395.04 596.97 445.89 683.61 559.29 723.23 531.5 748.74 508.95 808.66 465.64 828.83 437.16 821.12 417.58 810.44 405.72 803.91 401.57 757.64 336.3 690.5 304.27 628.89 294.18 584.99 314.94 564.22 324.44 518.54 353.51"/>
      <polygon id="2"
               onMouseOver={props.onDistrictHover}
               onTouchStart={props.onDistrictHover}
               onMouseOut={props.onDistrictOut}
               data-name="petite france"
               class="district cls-1"
               points="518.54 353.51 462.03 393.31 419.23 427.11 403.15 445.65 400.7 450.83 398.79 488.71 398.79 508.07 400.94 523.29 398.79 541.12 379.87 573.12 364.07 599.46 359.61 616.48 359.61 626.2 372.58 682.12 369.74 700.35 359.61 733.98 361.64 745.33 518.54 759.1 571.52 759.1 749.73 719.29 743.75 697.52 736.47 686.41 702.55 633.5 687.5 618.69 674.62 610.7 663.37 606.54 643.83 600.7 641.41 595.46 687.96 564.98 683.61 559.29 596.97 445.89 581.91 395.04 534.05 392.96 518.54 353.51"/>
      <polygon id="1"
               onMouseOver={props.onDistrictHover}
               onTouchStart={props.onDistrictHover}
               onMouseOut={props.onDistrictOut}
               data-name="krutenau" class="district cls-1"
               points="674.62 610.7 687.5 618.69 702.55 633.5 736.47 686.41 743.75 697.52 749.73 719.29 787.64 718.14 836.32 670.93 863.94 638.09 880.07 605.97 888.7 593.69 926.45 609.52 951.57 535.28 977.57 460.74 980.57 443.46 870.77 396.82 826.01 460.14 812.02 475.91 687.96 564.98 641.41 595.46 643.83 600.7 663.37 606.54 674.62 610.7"/>
      <polygon id="6"
               onMouseOver={props.onDistrictHover}
               onTouchStart={props.onDistrictHover}
               onMouseOut={props.onDistrictOut}
               data-name="esplanade" class="district cls-1"
               points="980.57 443.46 977.57 460.74 951.57 535.28 929.08 603.38 926.45 609.52 888.7 593.69 880.07 605.97 863.94 638.09 836.32 670.93 787.64 718.14 835.73 718.26 877.25 721.16 958.97 731.68 1059.19 745.38 1158.36 756.6 1189.57 760.83 1213.37 761.83 1236.38 758.98 1259.53 752.57 1283.48 743.08 1313.17 718.06 1339.61 685.55 1381 622.84 1381 551.42 1349.76 530.35 1311.36 537.29 1139.88 509.15 980.57 443.46"/>
      <polygon id="13"
               onMouseOver={props.onDistrictHover}
               onTouchStart={props.onDistrictHover}
               onMouseOut={props.onDistrictOut}
               data-name="neudorf" class="district cls-1"
               points="339.37 791.18 359.61 760.1 379.2 752.83 396.17 756.14 480.26 763.89 491.7 765.74 507.56 780.49 601.98 778.64 615.63 764.63 662.88 747.24 695.03 741.62 739.99 733.19 752.79 727.57 810.03 727.57 863.92 729.13 1033.43 749.83 1070.58 752.86 1072.14 756.91 1159.65 769.56 1135.68 848.5 415.95 848.5 339.37 791.18"/>
      {/*<polygon id="port_rhin"
       data-name="port rhin" class="district cls-1"
       points="1135.68 848.5 1159.65 769.56 1227.45 776.17 1352.25 848.5 1360.51 848.5 1353.08 834.02 1342.6 822.17 1298.59 795.68 1299 772.04 1331.6 748.82 1344.44 734.75 1381 689.93 1381 848.5 1135.68 848.5"/>
       */}
      <polygon id="4"
               onMouseOver={props.onDistrictHover}
               onTouchStart={props.onDistrictHover}
               onMouseOut={props.onDistrictOut}
               data-name="quartier des 15"
               class="district cls-1"
               points="1381 273.55 1349.81 321.46 1293.5 294.41 1224.27 386.42 1189.82 431.44 1183.62 439.63 1138.98 494.94 1130.68 505.32 1139.88 509.15 1311.36 537.29 1349.76 530.35 1381 551.42 1381 273.55"/>
      <polygon id="5"
               onMouseOver={props.onDistrictHover}
               onTouchStart={props.onDistrictHover}
               onMouseOut={props.onDistrictOut}
               data-name="orangerie" class="district cls-1"
               points="1130.68 505.32 1183.62 439.63 1191.32 428.86 1293.5 294.41 1349.81 321.46 1381 273.55 1381 0.5 1093.34 0.5 1076.54 19.2 1074.85 26.33 1065.28 44.9 1061.15 65.35 1059.65 104.94 1053.09 128.2 1039.58 149.4 1027.94 164.41 999.94 196.93 995.38 204.67 991.61 217.97 988.83 252.11 984.26 266.2 976.92 277.36 942.18 317.41 932.65 327.53 910.62 342.42 893.75 353.93 870.77 396.82 980.57 443.46 1130.68 505.32"/>
      <polygon id="3"
               onMouseOver={props.onDistrictHover}
               onTouchStart={props.onDistrictHover}
               onMouseOut={props.onDistrictOut}
               data-name="wacken" class="district cls-1"
               points="641.91 0.5 619.35 23.68 614 23.68 569.38 64.07 574.08 106.93 727.81 76.44 841 63.94 914.21 58.05 970.24 59.28 984.44 56.27 1050.77 76.32 1055.45 40.39 1078.01 0.5 641.91 0.5"/>
      <polygon id="8"
               onMouseOver={props.onDistrictHover}
               onTouchStart={props.onDistrictHover}
               onMouseOut={props.onDistrictOut}
               data-name="halles/tribunal"
               class="district cls-1"
               points="574.08 106.93 432.39 124.4 356.69 247.26 395.27 273.62 405.14 284.02 453.82 388.3 496.69 358.38 526.61 339.4 585.33 302.78 634.46 286.27 635.55 270.2 705.87 210.14 584.43 159.33 574.08 106.93"/>
      <polygon id="7"
               onMouseOver={props.onDistrictHover}
               onTouchStart={props.onDistrictHover}
               onMouseOut={props.onDistrictOut}
               data-name="contades / république"
               class="district cls-1"
               points="1047.39 106.45 1042.06 125.28 1030.34 145.18 983.79 200.25 980.95 215.89 978.81 250.04 974.19 265.28 940.44 304.36 930.13 317.87 891.76 341.67 875.41 346.65 855.87 390 853.38 396.04 840.59 412.74 834.55 416.65 815.01 404.01 810.03 393.91 802.93 391.06 762.07 331.73 695.26 298.32 634.46 286.27 635.55 270.2 705.87 210.14 584.43 159.33 574.08 106.93 727.81 76.44 841 63.94 914.21 58.05 970.24 59.28 984.44 56.27 1050.77 76.32 1047.39 106.45"/>
      <polygon id="9"
               onMouseOver={props.onDistrictHover}
               onTouchStart={props.onDistrictHover}
               onMouseOut={props.onDistrictOut}
               data-name="gare / porte de shirmek"
               class="district cls-1"
               points="432.39 124.4 400.33 132.76 385.42 134.28 333.26 148.6 298.22 163.44 267.79 185.43 226.11 222 116.15 328.38 95.18 357.27 79.84 388.73 69.61 424.5 64.24 455.72 64.24 489.73 68.33 526.05 80.86 566.2 83.93 577.19 108.73 616.83 152.72 679.73 188.26 731.65 203.86 766.17 214.09 803.76 250.15 807.85 270.09 807.85 302.06 790.21 329.93 766.17 339.37 746.73 355.5 695.08 353.2 662.09 342.72 616.32 345.79 599.44 368.03 561.34 386.96 517.86 388.75 498.94 393.39 451.57 405.59 426.48 453.82 388.3 405.14 284.02 395.27 273.62 356.69 247.26 432.39 124.4"/>
    </svg>
  </div>
)

export default Map
