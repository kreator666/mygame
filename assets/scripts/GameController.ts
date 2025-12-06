import { _decorator, Component, Node, Label, director } from 'cc';
const { ccclass, property } = _decorator;

/**
 * 游戏主控制器
 * 管理游戏逻辑和状态
 */
@ccclass('GameController')
export class GameController extends Component {
    @property(Label)
    scoreLabel: Label = null!;

    @property(Label)
    gameOverLabel: Label = null!;

    private score: number = 0;
    private isGameOver: boolean = false;

    start() {
        // 初始化游戏
        this.score = 0;
        this.isGameOver = false;
        this.updateScore();
        
        if (this.gameOverLabel) {
            this.gameOverLabel.node.active = false;
        }
    }

    /**
     * 增加分数
     */
    addScore(points: number = 1) {
        if (this.isGameOver) return;
        
        this.score += points;
        this.updateScore();
    }

    /**
     * 更新分数显示
     */
    updateScore() {
        if (this.scoreLabel) {
            this.scoreLabel.string = `分数: ${this.score}`;
        }
    }

    /**
     * 游戏结束
     */
    gameOver() {
        this.isGameOver = true;
        if (this.gameOverLabel) {
            this.gameOverLabel.node.active = true;
            this.gameOverLabel.string = `游戏结束!\n最终分数: ${this.score}`;
        }
    }

    /**
     * 重新开始游戏
     */
    restart() {
        director.loadScene('Game');
    }
}

