import { ApiProperty } from '@nestjs/swagger';

export class LoginResponseEntity {
  @ApiProperty({
    description: 'Токен',
    example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImljZWtoYWJAZ21haWwuY29tIiwic3ViIjoiNzIxNzEyMTYtY2Q5Yi00MTAxLWFjMWMtYjc1MDIwNGVhNGRlIiwiaWF0IjoxNTk3MzExMTk2LCJleHAiOjE1OTc5MTExOTZ9.3WNFhQx3tBbgjKE8Uk1oTWGWcrW6R7axSfHRQc88klE',
  })
  accessToken!: string;
}
