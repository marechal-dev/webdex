import { ChevronDownIcon } from "@radix-ui/react-icons";
import * as Select from "@radix-ui/react-select";

export function TeamSelect() {
  return (
    <Select.Root>
      <Select.Trigger>
        <Select.Value placeholder="Selecione seu Time GO" />
        <Select.Icon>
          <ChevronDownIcon />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content>
          <Select.ScrollUpButton />
          <Select.Viewport>
            <Select.Item value="valor">Valor</Select.Item>

            <Select.Item value="mystic">Mystic</Select.Item>

            <Select.Item value="instinct">Instinct</Select.Item>
          </Select.Viewport>
          <Select.ScrollDownButton />
          <Select.Arrow />
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}
