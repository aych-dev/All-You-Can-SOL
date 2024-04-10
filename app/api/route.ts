import UserInfo from '../models/UserInfo';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const userInfoData = body.formData;
    await UserInfo.create(userInfoData);
    return NextResponse.json(
      { message: 'User Info submitted' },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ message: 'Error POST', error }, { status: 500 });
  }
}
 