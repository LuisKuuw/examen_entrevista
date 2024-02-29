<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class DesarrolladoresRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'NOMBRE' => 'required|max:45',
            'EDAD' => 'required|numeric',
            'HABILIDAD' => 'required|max:45'
        ];
    }

    public function messages(): array
    {
        return [

            'NOMBRE.required' => 'EL CAMPO NOMBRE ES OBLIGATORIO.',
            'NOMBRE.max' => 'EL CAMPO NOMBRE NO DEBE DE SUPERAR LOS 45 CARACTERES.',

            'EDAD.required' => 'EL CAMPO EDAD ES OBLIGATORIO.',
            'EDAD.numeric' => 'EL CAMPO EDAD DEBE DE SER UN NUMERO.',

            'HABILIDAD.required' => 'EL CAMPO HABILIDAD ES OBLIGATORIO.',
            'HABILIDAD.max' => 'EL CAMPO HABILIDAD NO DEBE DE SUPERAR LOS 45 CARACTERES.'
        ];
    }
}
