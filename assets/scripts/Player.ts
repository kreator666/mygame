import { _decorator, Component, Node, Vec3, input, Input, EventKeyboard, KeyCode } from 'cc';
const { ccclass, property } = _decorator;

/**
 * 玩家控制器
 * 处理玩家输入和移动
 */
@ccclass('Player')
export class Player extends Component {
    @property
    moveSpeed: number = 200;

    private direction: Vec3 = new Vec3(0, 0, 0);

    start() {
        // 监听键盘输入
        input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
        input.on(Input.EventType.KEY_UP, this.onKeyUp, this);
    }

    onDestroy() {
        // 移除监听
        input.off(Input.EventType.KEY_DOWN, this.onKeyDown, this);
        input.off(Input.EventType.KEY_UP, this.onKeyUp, this);
    }

    onKeyDown(event: EventKeyboard) {
        switch (event.keyCode) {
            case KeyCode.ARROW_LEFT:
            case KeyCode.KEY_A:
                this.direction.x = -1;
                break;
            case KeyCode.ARROW_RIGHT:
            case KeyCode.KEY_D:
                this.direction.x = 1;
                break;
            case KeyCode.ARROW_UP:
            case KeyCode.KEY_W:
                this.direction.y = 1;
                break;
            case KeyCode.ARROW_DOWN:
            case KeyCode.KEY_S:
                this.direction.y = -1;
                break;
        }
    }

    onKeyUp(event: EventKeyboard) {
        switch (event.keyCode) {
            case KeyCode.ARROW_LEFT:
            case KeyCode.KEY_A:
                if (this.direction.x < 0) this.direction.x = 0;
                break;
            case KeyCode.ARROW_RIGHT:
            case KeyCode.KEY_D:
                if (this.direction.x > 0) this.direction.x = 0;
                break;
            case KeyCode.ARROW_UP:
            case KeyCode.KEY_W:
                if (this.direction.y > 0) this.direction.y = 0;
                break;
            case KeyCode.ARROW_DOWN:
            case KeyCode.KEY_S:
                if (this.direction.y < 0) this.direction.y = 0;
                break;
        }
    }

    update(deltaTime: number) {
        if (this.direction.length() > 0) {
            const moveDistance = this.moveSpeed * deltaTime;
            const newPosition = this.node.position.clone();
            newPosition.x += this.direction.x * moveDistance;
            newPosition.y += this.direction.y * moveDistance;
            this.node.setPosition(newPosition);
        }
    }
}

