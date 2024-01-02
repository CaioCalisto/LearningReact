import TriggerNode from '@/app/flow/nodes/trigger/trigger-node'
import MenuNode from '@/app/flow/nodes/menu/menu.node'
import QueueNode from '@/app/flow/nodes/queue/queue.node'
import MenuOption from '@/app/flow/nodes/menu-option/menu-option'

export const NodeTypes = {
  trigger: TriggerNode,
  menu: MenuNode,
  queue: QueueNode,
  menuOption: MenuOption
}

export const NodeTypeNames = {
  trigger: 'trigger',
  menu: 'menu',
  queue: 'queue',
  menuOption: 'menuOption'
}
