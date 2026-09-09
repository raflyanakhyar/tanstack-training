import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva  } from "class-variance-authority"
import type {VariantProps} from "class-variance-authority";
import { cn } from "cn"

const buttonVariants = cva(
  "yes:group/button yes:inline-flex yes:shrink-0 yes:items-center yes:justify-center yes:rounded-lg yes:border yes:border-transparent yes:bg-clip-padding yes:text-sm yes:font-medium yes:whitespace-nowrap yes:transition-all yes:outline-none yes:select-none yes:focus-visible:border-ring yes:focus-visible:ring-3 yes:focus-visible:ring-ring/50 yes:active:not-aria-[haspopup]:translate-y-px yes:disabled:pointer-events-none yes:disabled:opacity-50 yes:aria-invalid:border-destructive yes:aria-invalid:ring-3 yes:aria-invalid:ring-destructive/20 yes:dark:aria-invalid:border-destructive/50 yes:dark:aria-invalid:ring-destructive/40 yes:[&_svg]:pointer-events-none yes:[&_svg]:shrink-0 yes:[&_svg:not([class*=size-])]:size-4",
  {
    variants: {
      variant: {
        default: "yes:bg-primary yes:text-primary-foreground yes:hover:bg-primary/80",
        outline:
          "yes:border-border yes:bg-background yes:hover:bg-muted yes:hover:text-foreground yes:aria-expanded:bg-muted yes:aria-expanded:text-foreground yes:dark:border-input yes:dark:bg-input/30 yes:dark:hover:bg-input/50",
        secondary:
          "yes:bg-secondary yes:text-secondary-foreground yes:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] yes:aria-expanded:bg-secondary yes:aria-expanded:text-secondary-foreground",
        ghost:
          "yes:hover:bg-muted yes:hover:text-foreground yes:aria-expanded:bg-muted yes:aria-expanded:text-foreground yes:dark:hover:bg-muted/50",
        destructive:
          "yes:bg-destructive/10 yes:text-destructive yes:hover:bg-destructive/20 yes:focus-visible:border-destructive/40 yes:focus-visible:ring-destructive/20 yes:dark:bg-destructive/20 yes:dark:hover:bg-destructive/30 yes:dark:focus-visible:ring-destructive/40",
        link: "yes:text-primary yes:underline-offset-4 yes:hover:underline",
      },
      size: {
        default:
          "yes:h-8 yes:gap-1.5 yes:px-2.5 yes:has-data-[icon=inline-end]:pr-2 yes:has-data-[icon=inline-start]:pl-2",
        xs: "yes:h-6 yes:gap-1 yes:rounded-[min(var(--radius-md),10px)] yes:px-2 yes:text-xs yes:in-data-[slot=button-group]:rounded-lg yes:has-data-[icon=inline-end]:pr-1.5 yes:has-data-[icon=inline-start]:pl-1.5 yes:[&_svg:not([class*=size-])]:size-3",
        sm: "yes:h-7 yes:gap-1 yes:rounded-[min(var(--radius-md),12px)] yes:px-2.5 yes:text-[0.8rem] yes:in-data-[slot=button-group]:rounded-lg yes:has-data-[icon=inline-end]:pr-1.5 yes:has-data-[icon=inline-start]:pl-1.5 yes:[&_svg:not([class*=size-])]:size-3.5",
        lg: "yes:h-9 yes:gap-1.5 yes:px-2.5 yes:has-data-[icon=inline-end]:pr-2 yes:has-data-[icon=inline-start]:pl-2",
        icon: "yes:size-8",
        "icon-xs":
          "yes:size-6 yes:rounded-[min(var(--radius-md),10px)] yes:in-data-[slot=button-group]:rounded-lg yes:[&_svg:not([class*=size-])]:size-3",
        "icon-sm":
          "yes:size-7 yes:rounded-[min(var(--radius-md),12px)] yes:in-data-[slot=button-group]:rounded-lg",
        "icon-lg": "yes:size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
