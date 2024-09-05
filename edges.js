var edges = {
	0: {
		// Existing connections
		101: {
			102: 1, // Direct connection to 102
			104: 1, // Direct connection to 104
			103: 1, // New connection to 103
		},
		102: {
			101: 1,
			106: 1, // Direct connection to 106
		},
		103: {
			101: 1, // Direct connection to 101
			106: 1, // Direct connection to 106
		},
		104: {
			101: 1, // Direct connection to 101
			201: 1, // Connection to the new path starting at 201
		},

		106: {
			102: 1,
			103: 1, // Direct connection to 103
			108: 1, // Direct connection to 108
		},
		108: {
			106: 1,
			109: 1, // Direct connection to 109
		},
		109: {
			108: 1,
			111: 1, // Direct connection to 111
		},
		111: {
			109: 1,
			112: 1, // Direct connection to 112
			115: 1, // Direct connection to 115
		},
		112: {
			111: 1,
			113: 1, // Direct connection to 113
		},
		113: {
			112: 1, // Corrected connection to 112
			114: 1, // Direct connection to 114
		},
		114: {
			105: 1,
			113: 1,
			115: 1, // Direct connection to 115
			// Direct connection to 105
		},
		105: {
			114: 1, // Direct connection to 114
		},
		115: {
			111: 1,
			114: 1, // Direct connection to 114
			116: 1, // Direct connection to 116
		},
		116: {
			115: 1,
			117: 1, // Direct connection to 117
		},
		117: {
			116: 1,
			120: 1, // Direct connection to 120
		},
		120: {
			117: 1,
			119: 1, // Direct connection to 119
		},
		119: {
			120: 1,
			118: 1, // Direct connection to 118
		},
		118: {
			119: 1, // Direct connection to 119
		},

		// New connections
		201: {
			104: 1, // Back to 104
			203: 1, // Next point in the path
		},
		203: {
			201: 1, // Back to 201
			206: 1, // Next point in the path
		},
		206: {
			203: 1, // Back to 203
			210: 1, // Next point in the path
		},
		210: {
			206: 1, // Back to 206
			213: 1, // Next point in the path
		},
		213: {
			210: 1, // Back to 210
			215: 1, // Next point in the path
		},
		215: {
			213: 1, // Back to 213
			217: 1, // Next point in the path
		},
		217: {
			215: 1, // Back to 215
			220: 1, // Next point in the path
		},
		220: {
			217: 1, // Back to 217
			219: 1, // Next point in the path
		},
		219: {
			220: 1, // Back to 220
			121: 1, // Next point in the path
		},
		121: {
			219: 1, // Back to 219
			122: 1, // Next point in the path
		},
		122: {
			121: 1, // Back to 121
			123: 1, // Next point in the path
		},
		123: {
			122: 1, // Back to 122
			124: 1, // Next point in the path
		},
		124: {
			123: 1, // Back to 123
			126: 1, // Next point in the path
		},
		126: {
			124: 1, // Back to 124
			127: 1, // Next point in the path
		},
		127: {
			126: 1, // Back to 126
			128: 1, // Next point in the path
		},
		128: {
			127: 1, // Back to 127
			129: 1, // Next point in the path
		},
		129: {
			128: 1, // Back to 128
			130: 1, // Next point in the path
		},
		130: {
			129: 1, // Back to 129
			131: 1, // Next point in the path
		},
		131: {
			130: 1, // Back to 130
			132: 1, // Next point in the path
		},
		132: {
			131: 1, // Back to 131
			133: 1, // Next point in the path
		},
		133: {
			132: 1, // Back to 132
			134: 1, // Next point in the path
		},
		134: {
			133: 1, // Back to 133
		},
	},
};
