import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

interface OptionsSelectorProps {
  label: string
  options: string[]
  selectedOption: string
  onChange: (option: string) => void
  priceMap?: Record<string, number>
}

export default function OptionsSelector({ label, options, selectedOption, onChange, priceMap }: OptionsSelectorProps) {
  return (
    <div className="space-y-2">
      <Label className="text-base font-medium">{label}</Label>
      <RadioGroup value={selectedOption} onValueChange={onChange} className="flex flex-wrap gap-3">
        {options.map((option) => (
          <div key={option} className="flex items-center">
            <RadioGroupItem value={option} id={`${label}-${option}`} className="peer sr-only" />
            <Label
              htmlFor={`${label}-${option}`}
              className="flex cursor-pointer items-center justify-center rounded-md border-2 border-muted bg-popover px-3 py-2 text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:text-primary"
            >
              {option}
              {priceMap && priceMap[option] && (
                <span className="ml-2 text-xs text-muted-foreground">${priceMap[option]}</span>
              )}
            </Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  )
}

