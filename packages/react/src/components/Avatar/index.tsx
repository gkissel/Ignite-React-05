import { User } from '@phosphor-icons/react'

import { AvatarContainer, AvatarImage, AvatarFallback } from './styles'
import { ComponentProps } from '@stitches/react'
import React from 'react'

export type AvatarProps = ComponentProps<typeof AvatarImage>

export function Avatar(props: AvatarProps) {
  return (
    <AvatarContainer>
      <AvatarImage {...props} />

      <AvatarFallback delayMs={600}>
        <User />
      </AvatarFallback>
    </AvatarContainer>
  )
}

Avatar.displayName = 'Avatar'
