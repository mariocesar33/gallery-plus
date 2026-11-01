import type { ComponentProps } from "react"
import { tv } from "tailwind-variants"

export const imageFilePreviewVariants = tv({
  base: `
    rounded-lg overflow-hidden
  `,
})

export const imageFilePreviewImageVariants = tv({
  base: `
    w-full h-full object-cover
  `,
})

interface ImagePreviewProps extends ComponentProps<"img"> {
  imageClassName?: string
}

export function ImagePreview({
  className,
  imageClassName,
  alt,
  ...props
}: ImagePreviewProps) {
  return (
    <div className={imageFilePreviewVariants({ className })}>
      <img
        alt={alt}
        className={imageFilePreviewImageVariants({ className: imageClassName })}
        {...props}
      />
    </div>
  )
}
