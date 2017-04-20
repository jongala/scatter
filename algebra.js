

y = m*x + b

[cx, cy]

cy = mAB * cx + bAB

cy = mAC * cx + bAC


//-------------------------
// getting bAB and bAC (y offsets)

y = m * x + b

midAB[1] = mAB * midAB[0] + bAB

bAB = midAB[1] - mAB * midAB[0];
bAC = midAC[1] - mAC * midAC[0];


//-------------------------
// equivalent expressions of circumcenter [cx, cy]
// as points on both lines

mAB * cx + bAB = mAC * cx + bAC

mAB * cx - mAC * cx = bAC - bAB

cx * (mAB - mAC) = bAC - bAB

cx = (bAC - bAB) / (mAB - mAC)

cy = mAC * cx + bAC


