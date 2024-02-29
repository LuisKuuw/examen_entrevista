<?php

namespace App\Http\Controllers;

use App\Http\Requests\DesarrolladoresRequest;
use App\Models\DesarrolladoresModel;
use Exception;
use Illuminate\Http\Request;

class DesarrolladoresController extends Controller
{

    //CREACION DE REGISTROS
    public function store(DesarrolladoresRequest $request)
    {
        try {

            $data_save = [
                "NOMBRE" => $request->NOMBRE,
                "EDAD" => $request->EDAD,
                "HABILIDAD" => $request->HABILIDAD
            ];

            DesarrolladoresModel::create($data_save);

            return ["status" => "200", "message" => "success", "response" => "ok"];
        } catch (Exception $e) {
            return ["status" => "0", "message" => $e->getMessage()];
        }
    }

    //VIZUALIZACION DE REGISTROS
    public function show()
    {
        try {

            $data = DesarrolladoresModel::all();

            return ["status" => "200", "message" => "success", "response" => $data];
        } catch (Exception $e) {
            return ["status" => "0", "message" => $e->getMessage()];
        }
    }

    //EDICION DE REGISTROS SE MUESTRA EL INFORMACION DEL REGISTRO
    public function edit(string $id)
    {
        try {

            $data = DesarrolladoresModel::find($id);

            return ["status" => "200", "message" => "success", "response" => $data];
        } catch (Exception $e) {
            return ["status" => "0", "message" => $e->getMessage()];
        }
    }

    //ACTUALIZACION DEL REGISTRO
    public function update(Request $request, string $id)
    {
        try {

            $data_update = [
                "NOMBRE" => $request->NOMBRE,
                "EDAD" => $request->EDAD,
                "HABILIDAD" => $request->HABILIDAD
            ];

            DesarrolladoresModel::find($id)
                ->update($data_update);

            return ["status" => "200", "message" => "success", "response" => "ok"];
        } catch (Exception $e) {
            return ["status" => "0", "message" => $e->getMessage()];
        }
    }

    //BORRAR EL REGISTRO
    public function destroy(string $id)
    {
        try {

            DesarrolladoresModel::find($id)->delete();

            return ["status" => "200", "message" => "success", "response" => "ok"];
        } catch (Exception $e) {
            return ["status" => "0", "message" => $e->getMessage()];
        }
    }
}
