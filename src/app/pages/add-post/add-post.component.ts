import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-post',
  standalone: true,
  imports: [HttpClientModule, FormsModule],
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent {
  // URL API
  private apiUrl = 'http://127.0.0.1:8000/api/posts/';

  // Если id равен 0, считается новым постом, иначе редактируем существующий
  id: number = 0; 

  title: string = '';
  description: string = '';
  author: string = ''; // можно ввести имя автора или использовать локальное хранилище
  date: string = ''; // формат: "2023-01-01T12:00:00Z"
  tags: string = ''; // ввод через запятую, например "tag1, tag2"
  imageUrl: string = ''; // URL изображения

  constructor(private http: HttpClient) {}

  onUpload(): void {
    // Проверяем обязательные поля title и description
    if (!this.title || !this.description) {
      alert('Please fill in both title and description.');
      return;
    }

    // Если поле "author" пустое, используем имя из localStorage или "Anonymous"
    const storedUsername = localStorage.getItem('username') || 'Anonymous';
    const finalAuthor = this.author || storedUsername;

    // Преобразуем строку тегов в массив, разделяя по запятым
    const tagsArray = this.tags
      .split(',')
      .map(tag => tag.trim())
      .filter(tag => tag.length > 0);

    // Формируем объект запроса согласно образцу
    const body = {
      id: this.id,
      title: this.title,
      description: this.description,
      author: finalAuthor,
      date: this.date, // ожидается формат ISO, например "2023-01-01T12:00:00Z"
      tags: tagsArray,
      imageUrl: this.imageUrl
    };

    this.http.post(this.apiUrl, body).subscribe(
      (response: any) => {
        console.log('Upload successful:', response);
        if (response.access) {
          localStorage.setItem('access_token', response.access);
        }
        if (response.refresh) {
          localStorage.setItem('refresh_token', response.refresh);
        }
        alert('Upload successful!');
        window.location.href = '/dashboard';
      },
      (error) => {
        console.error('Upload error:', error);
        alert('Upload failed. Please try again.');
      }
    );
  }
}
