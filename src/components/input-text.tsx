import { tv, type VariantProps } from "tailwind-variants"
import Icon from "./icon"
import Text from "./text"

export const inputTextContainerVariants = tv({
  base: "flex flex-col gap-1",
})

export const inputTextWrapperVariants = tv({
  base: `
    border border-solid border-border-primary
    focus:boder-boder-active bg-transparent
    rounded flex items-center gap-3
  `,
  variants: {
    size: {
      md: "h-10 px-3",
    },
    disabled: {
      true: "pointer-events-none",
    },
    defaultVariant: {
      size: "md",
      disabled: "false",
    },
  },
})

export const inputTextVariants = tv({
  base: `
    bg-transparent outline-none placeholder:text-placeholder
    text-accent-paragraph flex-1
  `,
})

export const inputTextIconsVariants = tv({
  base: "fill-placeholder",
  variants: {
    size: {
      md: "w-6 h-6",
    },
    defaultVariants: {
      size: "md",
    },
  },
})

interface InputTextProps
  extends VariantProps<typeof inputTextWrapperVariants>,
    Omit<React.ComponentProps<"input">, "size" | "disabled"> {
  icone?: React.ComponentProps<typeof Icon>["svg"]
  error?: React.ReactNode
}

export default function InputText({
  size,
  disabled,
  className,
  icone,
  error,
  ...props
}: InputTextProps) {
  return (
    <div className={inputTextContainerVariants(className)}>
      <div className={inputTextWrapperVariants({ size, disabled })}>
        {icone && (
          <Icon svg={icone} className={inputTextIconsVariants({ size })} />
        )}

        <input
          className={inputTextVariants()}
          disabled={disabled as boolean}
          {...props}
        />
      </div>

      {error && (
        <Text variant="label-small" className="text-accent-red">
          {error}
        </Text>
      )}
    </div>
  )
}
