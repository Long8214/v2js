<template>
    <div ref="echarts" id="echarts"></div>
</template>

<script>
export default {
    name:'echartsDataMatching',
    data(){
        return {
            option:{},
            echart:{}
        }
    },
    mounted(){
        let obj = {
            riverProfileList:[
                {
                    "id": 118,
                    "hscd": "BA4E0000000R",
                    "vtno": 1,
                    "cdistance": 327145,
                    "ele": 418.53,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 119,
                    "hscd": "BA4E0000000R",
                    "vtno": 2,
                    "cdistance": 326658,
                    "ele": 407.505,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 120,
                    "hscd": "BA4E0000000R",
                    "vtno": 3,
                    "cdistance": 322340,
                    "ele": 340.604,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 121,
                    "hscd": "BA4E0000000R",
                    "vtno": 4,
                    "cdistance": 2228,
                    "ele": 280.109,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 122,
                    "hscd": "BA4E0000000R",
                    "vtno": 5,
                    "cdistance": 6610,
                    "ele": 237.967,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 123,
                    "hscd": "BA4E0000000R",
                    "vtno": 6,
                    "cdistance": 12030,
                    "ele": 201.285,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 124,
                    "hscd": "BA4E0000000R",
                    "vtno": 7,
                    "cdistance": 17505,
                    "ele": 176.774,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 125,
                    "hscd": "BA4E0000000R",
                    "vtno": 8,
                    "cdistance": 23018,
                    "ele": 155.295,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 126,
                    "hscd": "BA4E0000000R",
                    "vtno": 9,
                    "cdistance": 28473,
                    "ele": 141.123,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 127,
                    "hscd": "BA4E0000000R",
                    "vtno": 10,
                    "cdistance": 33812,
                    "ele": 128.763,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 128,
                    "hscd": "BA4E0000000R",
                    "vtno": 11,
                    "cdistance": 38053,
                    "ele": 122.038,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 129,
                    "hscd": "BA4E0000000R",
                    "vtno": 12,
                    "cdistance": 42653,
                    "ele": 115.167,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 130,
                    "hscd": "BA4E0000000R",
                    "vtno": 13,
                    "cdistance": 48125,
                    "ele": 108.111,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 131,
                    "hscd": "BA4E0000000R",
                    "vtno": 14,
                    "cdistance": 50378,
                    "ele": 106.575,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 132,
                    "hscd": "BA4E0000000R",
                    "vtno": 15,
                    "cdistance": 55372,
                    "ele": 101.845,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 133,
                    "hscd": "BA4E0000000R",
                    "vtno": 16,
                    "cdistance": 60555,
                    "ele": 95.351,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 134,
                    "hscd": "BA4E0000000R",
                    "vtno": 17,
                    "cdistance": 65314,
                    "ele": 92.966,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 135,
                    "hscd": "BA4E0000000R",
                    "vtno": 18,
                    "cdistance": 72315,
                    "ele": 88.514,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 136,
                    "hscd": "BA4E0000000R",
                    "vtno": 19,
                    "cdistance": 75431,
                    "ele": 86.451,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 137,
                    "hscd": "BA4E0000000R",
                    "vtno": 20,
                    "cdistance": 79038,
                    "ele": 83.496,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 138,
                    "hscd": "BA4E0000000R",
                    "vtno": 21,
                    "cdistance": 86904,
                    "ele": 78.136,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 139,
                    "hscd": "BA4E0000000R",
                    "vtno": 22,
                    "cdistance": 91152,
                    "ele": 75.397,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 140,
                    "hscd": "BA4E0000000R",
                    "vtno": 23,
                    "cdistance": 96587,
                    "ele": 72.009,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 141,
                    "hscd": "BA4E0000000R",
                    "vtno": 24,
                    "cdistance": 101721,
                    "ele": 70.194,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 117,
                    "hscd": "BA4E0000000R",
                    "vtno": 25,
                    "cdistance": 103547,
                    "ele": 68.763,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 142,
                    "hscd": "BA4E0000000R",
                    "vtno": 26,
                    "cdistance": 107999,
                    "ele": 66.066,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 143,
                    "hscd": "BA4E0000000R",
                    "vtno": 27,
                    "cdistance": 113283,
                    "ele": 62.306,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 1,
                    "hscd": "BA4E0000000R",
                    "vtno": 28,
                    "cdistance": 119636,
                    "ele": 59.177,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 116,
                    "hscd": "BA4E0000000R",
                    "vtno": 29,
                    "cdistance": 126098,
                    "ele": 54.62,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 115,
                    "hscd": "BA4E0000000R",
                    "vtno": 30,
                    "cdistance": 133251,
                    "ele": 45.348,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 144,
                    "hscd": "BA4E0000000R",
                    "vtno": 31,
                    "cdistance": 143056,
                    "ele": 45.172,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 145,
                    "hscd": "BA4E0000000R",
                    "vtno": 32,
                    "cdistance": 150173,
                    "ele": 39.939,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 146,
                    "hscd": "BA4E0000000R",
                    "vtno": 33,
                    "cdistance": 156110,
                    "ele": 35.398,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 147,
                    "hscd": "BA4E0000000R",
                    "vtno": 34,
                    "cdistance": 162465,
                    "ele": 30.881,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 114,
                    "hscd": "BA4E0000000R",
                    "vtno": 35,
                    "cdistance": 166372,
                    "ele": 28.46,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 148,
                    "hscd": "BA4E0000000R",
                    "vtno": 36,
                    "cdistance": 168068,
                    "ele": 27.559,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 149,
                    "hscd": "BA4E0000000R",
                    "vtno": 37,
                    "cdistance": 173967,
                    "ele": 24.66,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 150,
                    "hscd": "BA4E0000000R",
                    "vtno": 38,
                    "cdistance": 178139,
                    "ele": 20.258,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 151,
                    "hscd": "BA4E0000000R",
                    "vtno": 39,
                    "cdistance": 182808,
                    "ele": 18.787,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 152,
                    "hscd": "BA4E0000000R",
                    "vtno": 40,
                    "cdistance": 186106,
                    "ele": 18.004,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 153,
                    "hscd": "BA4E0000000R",
                    "vtno": 41,
                    "cdistance": 187936,
                    "ele": 16.776,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 154,
                    "hscd": "BA4E0000000R",
                    "vtno": 42,
                    "cdistance": 194676,
                    "ele": 15.975,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 155,
                    "hscd": "BA4E0000000R",
                    "vtno": 43,
                    "cdistance": 196043,
                    "ele": 14.901,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 156,
                    "hscd": "BA4E0000000R",
                    "vtno": 44,
                    "cdistance": 199415,
                    "ele": 14.127,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 157,
                    "hscd": "BA4E0000000R",
                    "vtno": 45,
                    "cdistance": 204606,
                    "ele": 12.8,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 158,
                    "hscd": "BA4E0000000R",
                    "vtno": 46,
                    "cdistance": 210281,
                    "ele": 11.83,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 159,
                    "hscd": "BA4E0000000R",
                    "vtno": 47,
                    "cdistance": 217576,
                    "ele": 9.585,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 160,
                    "hscd": "BA4E0000000R",
                    "vtno": 48,
                    "cdistance": 223344,
                    "ele": 9.297,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 161,
                    "hscd": "BA4E0000000R",
                    "vtno": 49,
                    "cdistance": 230175,
                    "ele": 6.652,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 162,
                    "hscd": "BA4E0000000R",
                    "vtno": 50,
                    "cdistance": 235576,
                    "ele": 4.73,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 163,
                    "hscd": "BA4E0000000R",
                    "vtno": 51,
                    "cdistance": 240344,
                    "ele": 4.903,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 164,
                    "hscd": "BA4E0000000R",
                    "vtno": 52,
                    "cdistance": 242599,
                    "ele": 4.501,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 85,
                    "hscd": "BA4E0000000R",
                    "vtno": 53,
                    "cdistance": 244657,
                    "ele": 3.267,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 86,
                    "hscd": "BA4E0000000R",
                    "vtno": 54,
                    "cdistance": 245505,
                    "ele": 3.103,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 87,
                    "hscd": "BA4E0000000R",
                    "vtno": 55,
                    "cdistance": 245954,
                    "ele": 3.615,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 88,
                    "hscd": "BA4E0000000R",
                    "vtno": 56,
                    "cdistance": 246764,
                    "ele": 3.29,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 89,
                    "hscd": "BA4E0000000R",
                    "vtno": 57,
                    "cdistance": 246993,
                    "ele": 3.164,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 90,
                    "hscd": "BA4E0000000R",
                    "vtno": 58,
                    "cdistance": 247365,
                    "ele": 2.781,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 91,
                    "hscd": "BA4E0000000R",
                    "vtno": 59,
                    "cdistance": 247728,
                    "ele": 2.681,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 92,
                    "hscd": "BA4E0000000R",
                    "vtno": 60,
                    "cdistance": 247930,
                    "ele": 2.967,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 93,
                    "hscd": "BA4E0000000R",
                    "vtno": 61,
                    "cdistance": 248604,
                    "ele": 1.768,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 94,
                    "hscd": "BA4E0000000R",
                    "vtno": 62,
                    "cdistance": 249238,
                    "ele": 2.187,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 95,
                    "hscd": "BA4E0000000R",
                    "vtno": 63,
                    "cdistance": 249608,
                    "ele": 1.833,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 96,
                    "hscd": "BA4E0000000R",
                    "vtno": 64,
                    "cdistance": 250151,
                    "ele": 3.414,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 97,
                    "hscd": "BA4E0000000R",
                    "vtno": 65,
                    "cdistance": 250909,
                    "ele": 2.608,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 98,
                    "hscd": "BA4E0000000R",
                    "vtno": 66,
                    "cdistance": 251363,
                    "ele": 2.585,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 99,
                    "hscd": "BA4E0000000R",
                    "vtno": 67,
                    "cdistance": 251834,
                    "ele": 3.246,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 100,
                    "hscd": "BA4E0000000R",
                    "vtno": 68,
                    "cdistance": 252198,
                    "ele": 3.145,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 101,
                    "hscd": "BA4E0000000R",
                    "vtno": 69,
                    "cdistance": 252666,
                    "ele": 2.987,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 102,
                    "hscd": "BA4E0000000R",
                    "vtno": 70,
                    "cdistance": 253652,
                    "ele": 2.986,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 103,
                    "hscd": "BA4E0000000R",
                    "vtno": 71,
                    "cdistance": 253878,
                    "ele": 0.561,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 104,
                    "hscd": "BA4E0000000R",
                    "vtno": 72,
                    "cdistance": 254586,
                    "ele": 2.905,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 105,
                    "hscd": "BA4E0000000R",
                    "vtno": 73,
                    "cdistance": 255243,
                    "ele": 2.215,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 106,
                    "hscd": "BA4E0000000R",
                    "vtno": 74,
                    "cdistance": 256217,
                    "ele": 2.805,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 107,
                    "hscd": "BA4E0000000R",
                    "vtno": 75,
                    "cdistance": 256643,
                    "ele": 2.894,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 108,
                    "hscd": "BA4E0000000R",
                    "vtno": 76,
                    "cdistance": 257200,
                    "ele": 2.654,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 109,
                    "hscd": "BA4E0000000R",
                    "vtno": 77,
                    "cdistance": 257759,
                    "ele": 1.865,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 110,
                    "hscd": "BA4E0000000R",
                    "vtno": 78,
                    "cdistance": 258394,
                    "ele": 2.242,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 111,
                    "hscd": "BA4E0000000R",
                    "vtno": 79,
                    "cdistance": 260021,
                    "ele": 1.722,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 112,
                    "hscd": "BA4E0000000R",
                    "vtno": 80,
                    "cdistance": 261440,
                    "ele": 2.746,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 113,
                    "hscd": "BA4E0000000R",
                    "vtno": 81,
                    "cdistance": 262285,
                    "ele": 1.003,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 42,
                    "hscd": "BA4E0000000R",
                    "vtno": 82,
                    "cdistance": 263010,
                    "ele": 2.85,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 43,
                    "hscd": "BA4E0000000R",
                    "vtno": 83,
                    "cdistance": 263568,
                    "ele": 2.01,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 44,
                    "hscd": "BA4E0000000R",
                    "vtno": 84,
                    "cdistance": 264436,
                    "ele": 0.875,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 45,
                    "hscd": "BA4E0000000R",
                    "vtno": 85,
                    "cdistance": 264071,
                    "ele": 2.375,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 46,
                    "hscd": "BA4E0000000R",
                    "vtno": 86,
                    "cdistance": 265794,
                    "ele": 2.168,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 47,
                    "hscd": "BA4E0000000R",
                    "vtno": 87,
                    "cdistance": 265773,
                    "ele": 2.619,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 48,
                    "hscd": "BA4E0000000R",
                    "vtno": 88,
                    "cdistance": 266321,
                    "ele": 2.087,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 49,
                    "hscd": "BA4E0000000R",
                    "vtno": 89,
                    "cdistance": 266489,
                    "ele": 2.04,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 50,
                    "hscd": "BA4E0000000R",
                    "vtno": 90,
                    "cdistance": 267404,
                    "ele": 2.189,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 51,
                    "hscd": "BA4E0000000R",
                    "vtno": 91,
                    "cdistance": 267922,
                    "ele": 1.454,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 52,
                    "hscd": "BA4E0000000R",
                    "vtno": 92,
                    "cdistance": 268333,
                    "ele": 0.998,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 53,
                    "hscd": "BA4E0000000R",
                    "vtno": 93,
                    "cdistance": 269058,
                    "ele": -2.39,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 54,
                    "hscd": "BA4E0000000R",
                    "vtno": 94,
                    "cdistance": 269874,
                    "ele": 1.269,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 55,
                    "hscd": "BA4E0000000R",
                    "vtno": 95,
                    "cdistance": 270572,
                    "ele": 1.041,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 56,
                    "hscd": "BA4E0000000R",
                    "vtno": 96,
                    "cdistance": 271189,
                    "ele": 1.379,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 57,
                    "hscd": "BA4E0000000R",
                    "vtno": 97,
                    "cdistance": 271928,
                    "ele": 0.547,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 58,
                    "hscd": "BA4E0000000R",
                    "vtno": 98,
                    "cdistance": 272438,
                    "ele": 0.399,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 59,
                    "hscd": "BA4E0000000R",
                    "vtno": 99,
                    "cdistance": 273175,
                    "ele": 0.16,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 60,
                    "hscd": "BA4E0000000R",
                    "vtno": 100,
                    "cdistance": 274024,
                    "ele": 0.13,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 61,
                    "hscd": "BA4E0000000R",
                    "vtno": 101,
                    "cdistance": 275109,
                    "ele": 0.31,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 62,
                    "hscd": "BA4E0000000R",
                    "vtno": 102,
                    "cdistance": 275762,
                    "ele": 0.2,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 63,
                    "hscd": "BA4E0000000R",
                    "vtno": 103,
                    "cdistance": 275886,
                    "ele": 0.49,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 64,
                    "hscd": "BA4E0000000R",
                    "vtno": 104,
                    "cdistance": 276944,
                    "ele": -0.31,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 65,
                    "hscd": "BA4E0000000R",
                    "vtno": 105,
                    "cdistance": 277505,
                    "ele": 0.704,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 66,
                    "hscd": "BA4E0000000R",
                    "vtno": 106,
                    "cdistance": 278049,
                    "ele": -0.33,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 67,
                    "hscd": "BA4E0000000R",
                    "vtno": 107,
                    "cdistance": 278802,
                    "ele": -0.42,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 68,
                    "hscd": "BA4E0000000R",
                    "vtno": 108,
                    "cdistance": 279339,
                    "ele": -4.21,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 69,
                    "hscd": "BA4E0000000R",
                    "vtno": 109,
                    "cdistance": 279854,
                    "ele": -1.08,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 70,
                    "hscd": "BA4E0000000R",
                    "vtno": 110,
                    "cdistance": 280871,
                    "ele": -0.9,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 71,
                    "hscd": "BA4E0000000R",
                    "vtno": 111,
                    "cdistance": 281498,
                    "ele": -0.26,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 72,
                    "hscd": "BA4E0000000R",
                    "vtno": 112,
                    "cdistance": 281951,
                    "ele": -0.54,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 73,
                    "hscd": "BA4E0000000R",
                    "vtno": 113,
                    "cdistance": 282643,
                    "ele": 0.175,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 74,
                    "hscd": "BA4E0000000R",
                    "vtno": 114,
                    "cdistance": 283328,
                    "ele": -0.213,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 75,
                    "hscd": "BA4E0000000R",
                    "vtno": 115,
                    "cdistance": 283955,
                    "ele": 0.025,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 76,
                    "hscd": "BA4E0000000R",
                    "vtno": 116,
                    "cdistance": 284860,
                    "ele": -0.42,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 77,
                    "hscd": "BA4E0000000R",
                    "vtno": 117,
                    "cdistance": 286009,
                    "ele": -1.32,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 78,
                    "hscd": "BA4E0000000R",
                    "vtno": 118,
                    "cdistance": 286468,
                    "ele": -0.943,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 79,
                    "hscd": "BA4E0000000R",
                    "vtno": 119,
                    "cdistance": 287005,
                    "ele": -1.1,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 80,
                    "hscd": "BA4E0000000R",
                    "vtno": 120,
                    "cdistance": 287537,
                    "ele": -0.29,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 81,
                    "hscd": "BA4E0000000R",
                    "vtno": 121,
                    "cdistance": 288081,
                    "ele": -1.95,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 82,
                    "hscd": "BA4E0000000R",
                    "vtno": 122,
                    "cdistance": 288811,
                    "ele": -3.91,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 83,
                    "hscd": "BA4E0000000R",
                    "vtno": 123,
                    "cdistance": 289469,
                    "ele": -1.45,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 84,
                    "hscd": "BA4E0000000R",
                    "vtno": 124,
                    "cdistance": 289975,
                    "ele": 2.31,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 41,
                    "hscd": "BA4E0000000R",
                    "vtno": 125,
                    "cdistance": 291519,
                    "ele": -0.56,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 40,
                    "hscd": "BA4E0000000R",
                    "vtno": 126,
                    "cdistance": 291669,
                    "ele": -0.362,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 39,
                    "hscd": "BA4E0000000R",
                    "vtno": 127,
                    "cdistance": 291883,
                    "ele": -0.18,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 38,
                    "hscd": "BA4E0000000R",
                    "vtno": 128,
                    "cdistance": 292394,
                    "ele": -1.21,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 37,
                    "hscd": "BA4E0000000R",
                    "vtno": 129,
                    "cdistance": 292941,
                    "ele": -1.02,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 36,
                    "hscd": "BA4E0000000R",
                    "vtno": 130,
                    "cdistance": 293472,
                    "ele": -1.41,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 35,
                    "hscd": "BA4E0000000R",
                    "vtno": 131,
                    "cdistance": 294983,
                    "ele": -3.89,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 34,
                    "hscd": "BA4E0000000R",
                    "vtno": 132,
                    "cdistance": 295681,
                    "ele": -1.65,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 33,
                    "hscd": "BA4E0000000R",
                    "vtno": 133,
                    "cdistance": 296302,
                    "ele": -1.61,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 32,
                    "hscd": "BA4E0000000R",
                    "vtno": 134,
                    "cdistance": 296948,
                    "ele": -1.81,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 31,
                    "hscd": "BA4E0000000R",
                    "vtno": 135,
                    "cdistance": 297528,
                    "ele": -2.47,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 30,
                    "hscd": "BA4E0000000R",
                    "vtno": 136,
                    "cdistance": 298186,
                    "ele": -2.05,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 29,
                    "hscd": "BA4E0000000R",
                    "vtno": 137,
                    "cdistance": 299287,
                    "ele": -5.68,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 28,
                    "hscd": "BA4E0000000R",
                    "vtno": 138,
                    "cdistance": 300080,
                    "ele": -1.79,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 27,
                    "hscd": "BA4E0000000R",
                    "vtno": 139,
                    "cdistance": 300615,
                    "ele": -2.45,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 26,
                    "hscd": "BA4E0000000R",
                    "vtno": 140,
                    "cdistance": 301134,
                    "ele": -2.29,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 25,
                    "hscd": "BA4E0000000R",
                    "vtno": 141,
                    "cdistance": 301822,
                    "ele": -2.48,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 24,
                    "hscd": "BA4E0000000R",
                    "vtno": 142,
                    "cdistance": 302517,
                    "ele": -2.23,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 23,
                    "hscd": "BA4E0000000R",
                    "vtno": 143,
                    "cdistance": 303097,
                    "ele": -6.06,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 22,
                    "hscd": "BA4E0000000R",
                    "vtno": 144,
                    "cdistance": 303700,
                    "ele": -4.62,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 21,
                    "hscd": "BA4E0000000R",
                    "vtno": 145,
                    "cdistance": 304721,
                    "ele": -3.32,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 18,
                    "hscd": "BA4E0000000R",
                    "vtno": 146,
                    "cdistance": 309848,
                    "ele": -5.75,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 17,
                    "hscd": "BA4E0000000R",
                    "vtno": 147,
                    "cdistance": 310570,
                    "ele": -4.22,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 16,
                    "hscd": "BA4E0000000R",
                    "vtno": 148,
                    "cdistance": 311789,
                    "ele": -5.62,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 15,
                    "hscd": "BA4E0000000R",
                    "vtno": 149,
                    "cdistance": 312308,
                    "ele": -4.43,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 14,
                    "hscd": "BA4E0000000R",
                    "vtno": 150,
                    "cdistance": 312805,
                    "ele": -4.17,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 13,
                    "hscd": "BA4E0000000R",
                    "vtno": 151,
                    "cdistance": 313318,
                    "ele": -7.92,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 12,
                    "hscd": "BA4E0000000R",
                    "vtno": 152,
                    "cdistance": 313895,
                    "ele": -7.59,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 11,
                    "hscd": "BA4E0000000R",
                    "vtno": 153,
                    "cdistance": 314389,
                    "ele": -5.46,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 10,
                    "hscd": "BA4E0000000R",
                    "vtno": 154,
                    "cdistance": 315022,
                    "ele": -9.42,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 9,
                    "hscd": "BA4E0000000R",
                    "vtno": 155,
                    "cdistance": 315568,
                    "ele": -2.59,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 8,
                    "hscd": "BA4E0000000R",
                    "vtno": 156,
                    "cdistance": 316090,
                    "ele": -5.4,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 7,
                    "hscd": "BA4E0000000R",
                    "vtno": 157,
                    "cdistance": 316565,
                    "ele": -5.86,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 6,
                    "hscd": "BA4E0000000R",
                    "vtno": 158,
                    "cdistance": 316986,
                    "ele": -4.94,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 5,
                    "hscd": "BA4E0000000R",
                    "vtno": 159,
                    "cdistance": 317495,
                    "ele": -4.09,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 4,
                    "hscd": "BA4E0000000R",
                    "vtno": 160,
                    "cdistance": 318219,
                    "ele": -9.63,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 3,
                    "hscd": "BA4E0000000R",
                    "vtno": 161,
                    "cdistance": 319060,
                    "ele": -7.43,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 2,
                    "hscd": "BA4E0000000R",
                    "vtno": 162,
                    "cdistance": 319480,
                    "ele": -9.5,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 19,
                    "hscd": "BA4E0000000R",
                    "vtno": 163,
                    "cdistance": 307279,
                    "ele": -4.08,
                    "lgtd": null,
                    "lttd": null
                },
                {
                    "id": 20,
                    "hscd": "BA4E0000000R",
                    "vtno": 164,
                    "cdistance": 305191,
                    "ele": -4.87,
                    "lgtd": null,
                    "lttd": null
                }
            ],
            riverSurfaceProfileList:[
                {
                    "hscd": "BA4E0000000R",
                    "stcd": "21000100",
                    "stnm": "韩家杖子",
                    "distance": 48348,
                    "orderNum": 4,
                    "z": 109.48
                },
                {
                    "hscd": "BA4E0000000R",
                    "stcd": "21000150",
                    "stnm": "东白城子",
                    "distance": 103664,
                    "orderNum": 5,
                    "z": 69.47
                },
                {
                    "hscd": "BA4E0000000R",
                    "stcd": "21000250",
                    "stnm": "红旗堡",
                    "distance": 176599,
                    "orderNum": 6,
                    "z": 24.26
                },
                {
                    "hscd": "BA4E0000000R",
                    "stcd": "21000410",
                    "stnm": "新兴",
                    "distance": 211775,
                    "orderNum": 7,
                    "z": null
                },
                {
                    "hscd": "BA4E0000000R",
                    "stcd": "21000420",
                    "stnm": "四家子",
                    "distance": 235483,
                    "orderNum": 8,
                    "z": 7.3
                },
                {
                    "hscd": "BA4E0000000R",
                    "stcd": "21000494",
                    "stnm": "绕阳",
                    "distance": 246401,
                    "orderNum": 9,
                    "z": null
                },
                {
                    "hscd": "BA4E0000000R",
                    "stcd": "21000555",
                    "stnm": "杜家",
                    "distance": 277881,
                    "orderNum": 10,
                    "z": 2.71
                },
                {
                    "hscd": "BA4E0000000R",
                    "stcd": "21000589",
                    "stnm": "淤河盖",
                    "distance": 304876,
                    "orderNum": 11,
                    "z": 1.481
                },
                {
                    "hscd": "BA4E0000000R",
                    "stcd": "21000590",
                    "stnm": "万金滩",
                    "distance": 315901,
                    "orderNum": 12,
                    "z": 0.49
                }
            ]
        }
        this.init(obj,this.$refs.echarts)
    },
    methods:{
        init(row,value){
            console.log(row,value)
            this.echart = this.$echarts.init(value)
            let count = 0  //记录显示站点数量
            let x = []  // 高程
            let y = []  //起点距
            let rx = []  //站点名称
            let ry = []  //站点距离
            let rz = []  //水位
            let arr = []  //暂存站点距离。
            let countLs = []  //暂存起点距数组需要为null的地方

            row.riverProfileList.forEach(item=>{x.push(item.ele);y.push(item.cdistance)})
            row.riverSurfaceProfileList.forEach(item=>arr.push(item.distance))

            arr.forEach((arrItem,arrIndex)=>{
                y.forEach((yItem,yIndex)=>{
                    if(arrItem > y[yIndex -1] && arrItem <= yItem ){
                    // 判断是否水位或名称为null
                    if(row.riverSurfaceProfileList[arrIndex].stnm != null && row.riverSurfaceProfileList[arrIndex].z != null){
                        count++  // 
                        rx[yIndex + countLs.length] = row.riverSurfaceProfileList[arrIndex].stnm
                        ry[yIndex + countLs.length] = row.riverSurfaceProfileList[arrIndex].distance
                        rz[yIndex + countLs.length] = row.riverSurfaceProfileList[arrIndex].z
                        // 如果数据相等  不需要添加null
                        if(arrItem != yItem){
                        countLs.push(yIndex)
                        }
                    }
                    }
                    
                })
            })
            countLs.forEach((item,index)=> y.splice(item + index, 0, null))
            // 长度与起点距保持一直
            rx.length = y.length
            ry.length = y.length
            rz.length = y.length
            console.log(rx,ry,rz)
            this.option = {
                xAxis: {
                type: "category",
                // boundaryGap: false,
                data:x,
                name: "站点名称",
                nameTextStyle: {
                    // color: "#b5fba5"
                    color: "#3D6DAC",
                },
                axisLabel: {
                    textStyle: {
                        color: "#4D96FF",
                    },
                    fontSize: 11,
                    interval: 0,
                    formatter: function(value, index) {
                        return rx[index]
                    }
                },
                axisLine: {
                    // show:false
                    lineStyle: {
                    // color: "#b5fba5",
                    color: "#3D6DAC",
                    width: 1,
                    },
                },
                axisTick: {
                    show: false, // 不显示刻度点
                },
                minInterval: 1,
                splitLine: {
                    show: false,
                },
                },
                backgroundColor: "rgba(2,23,49,0.59)",
                // 提示框
                tooltip: {
                trigger: "axis", // 鼠标移动到坐标轴上时触发
                formatter: function (params) {
                    let X = "高程(m):" + params[0].value;
                    let Y = y[params[0].dataIndex] == null ? '' : "起点距(m):" + y[params[0].dataIndex];  //如果为null不展示
                    if(params.length > 1){
                    if(params[1].value == undefined){
                        return `${X}</br>${Y}`
                    }else{
                        let S = "水位(m):" + params[1].value
                        return `${S}</br>${X}</br>${Y}`
                    }
                    }else{
                    return `${X}</br>${Y}`
                    }
                
                },
                axisPointer: {
                    type: "line", // 指示器类型为线性
                },
                },

                grid: {
                left: 60, // 网格左侧距离容器左侧的距离
                right: 80, // 网格右侧距离容器右侧的距离
                top: 60, // 网格顶部距离容器顶部的距离
                bottom: 40, // 网格底部距离容器底部的距离
                },
                
                yAxis: {
                data: x,
                show: true,
                type: "value",
                // 背景线
                splitLine: {
                    show: true,
                    interval: 1000, // 相邻两条分割线之间的距离（高度）
                    lineStyle: {
                    width: 1,
                    color: "#162B5D",
                    type: "solid", //实线
                    },
                },
                axisTick: {
                    show: false, // 不显示刻度点
                },
                // y线
                axisLine: {
                    lineStyle: {
                    color: "rgb(177, 122, 54)",
                    width: 1,
                    },
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                    color: "rgb(177, 122, 54)",
                    },
                    fontSize: 11,
                    interval: "auto",
                    formatter: "{value}",
                },
                name: "高程(m)",
                nameTextStyle: {
                    color: "rgb(177, 122, 54)"
                },
                },
                legend: {
                data: [
                    {
                    name: "高程",
                    icon: "line",
                    },
                    {
                    name: "水位",
                    icon: "line",
                    },
                ],
            
                textStyle: {
                    fontSize: 11,
                    color: "#DDECFF",
                },
                y: "top",
                x: "right",
                top: -110,
                padding: [125, 50, 125, 125],
                },
                series: [
                {
                    name: "高程",
                    data: x,
                    type: "line",
                    showSymbol: false,
                    smooth:true,
                    connectNulls:true,//自动连接为null undefined属性的点  保证不断点
                    areaStyle: {
                    color: "rgba(177, 122, 54,.6)"
                    },
                    itemStyle: {
                    normal: {
                        color: "rgb(177, 122, 54)",
                        lineStyle: {
                        color: "rgb(177, 122, 54)",
                        },
                    },
                    },
                },
                {
                    name: "水位",
                    data: rz,
                    type: "line",
                    symbolSize: count > 1 ? 5 : 8 ,
                    smooth:true,
                    connectNulls:true,//自动连接为null undefined属性的点 
                    itemStyle: {
                    normal: {
                        color:'skyblue',
                        lineStyle: {
                        color: "skyblue",
                        },
                    },
                    },
                },
                ],
            };
            this.echart.setOption(this.option);
        }   
    }
}

</script>

<style scoped lang="less">
#echarts{
    margin: 100px auto;
    width: 880px;
    height: 400px ;
    background: rgb(5, 35, 62);
}

</style>