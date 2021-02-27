import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('user_surveys')
class UserServey {
  @PrimaryColumn()
  id: string;

  @Column('uuid')
  user_id: string;

  @Column('uuid')
  survey_id: string;

  @Column('number')
  value: number;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { UserServey };
