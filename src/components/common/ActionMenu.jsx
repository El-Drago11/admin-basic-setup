import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";

/**
 * Reusable action menu dropdown - encapsulates open/close state internally.
 * No need for separate anchorEl or selectedRow state in parent.
 *
 * @param {Object} props
 * @param {Array} props.items - Menu items: [{ label, onClick, show? }]
 * @param {*} props.row - Row/data passed to each onClick(row)
 * @param {React.ReactNode} [props.trigger] - Custom trigger element (default: three-dots icon)
 * @param {string} [props.placement] - "right" (default) | "left" - menu opens beside the icon
 */
const ActionMenu = ({
  items = [],
  row,
  trigger,
  placement = "right",
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleOpen = (event) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleItemClick = (item) => (event) => {
    event.stopPropagation();
    item.onClick?.(row);
    handleClose();
  };

  const visibleItems = items.filter((item) => item.show !== false);

  return (
    <>
      {trigger ? (
        <span onClick={handleOpen} className="cursor-pointer">
          {trigger}
        </span>
      ) : (
        <IconButton
          size="small"
          onClick={handleOpen}
          aria-label="actions"
          aria-controls={open ? "action-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          sx={{
            color: "text.secondary",
            "&:hover": {
              color: "primary.main",
              backgroundColor: "action.hover",
            },
          }}
        >
          <MoreVertIcon fontSize="small" />
        </IconButton>
      )}
      <Menu
        id="action-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={(e) => e.stopPropagation()}
        anchorOrigin={
          placement === "left"
            ? { vertical: "top", horizontal: "left" }
            : { vertical: "top", horizontal: "right" }
        }
        transformOrigin={
          placement === "left"
            ? { vertical: "top", horizontal: "right" }
            : { vertical: "top", horizontal: "left" }
        }
        slotProps={{
          paper: {
            elevation: 8,
            sx: {
              ml: placement === "left" ? 0 : 1,
              mr: placement === "left" ? 1 : 0,
              minWidth: 160,
              borderRadius: 2,
              boxShadow:
                "0 4px 20px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.06)",
            },
          },
        }}
      >
        {visibleItems.map((item, index) => (
          <MenuItem
            key={index}
            onClick={handleItemClick(item)}
            sx={{
              py: 1.5,
              mx: 0.5,
              borderRadius: 1.5,
              my: 0.25,
              fontSize: "0.875rem",
              transition: "background-color 0.15s ease",
              "&:hover": {
                backgroundColor: "action.hover",
              },
            }}
          >
            {item.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default ActionMenu;
