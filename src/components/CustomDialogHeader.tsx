import { Icon } from "@iconify/react";
import { DialogHeader, IconButton } from "@material-tailwind/react";

// -------------------------------------------------------------------------------------------------

interface IProps {
  title?: string;
  className?: string;
  handleDialog: Function;
}

// -------------------------------------------------------------------------------------------------

export default function CustomDialogHeader({ title = '', className = '', handleDialog }: IProps) {
  return (
    <DialogHeader className={`justify-between ${className}`}>
      <h2 className="text-xl md:text-2xl font-bold">{title}</h2>
      <IconButton variant="text" className="text-xl text-primary" onClick={() => handleDialog()}>
        <Icon icon="akar-icons:cross" />
      </IconButton>
    </DialogHeader>
  )
}