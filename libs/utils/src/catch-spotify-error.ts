import {
  ForbiddenException,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common'

export const catchSpotifyError = ({ response: { data, status } }) => {
  if (status === 401) throw new UnauthorizedException(data.error.message)
  if (data.error === 'invalid_grant')
    throw new UnauthorizedException('Invalid token')
  if (
    status === 403 &&
    data === 'User not registered in the Developer Dashboard'
  )
    throw new ForbiddenException(
      'User not registered in the Developer Dashboard'
    )

  throw new InternalServerErrorException(
    'Something went wrong with fetching data from spotify API',
    data?.error
  )
}
